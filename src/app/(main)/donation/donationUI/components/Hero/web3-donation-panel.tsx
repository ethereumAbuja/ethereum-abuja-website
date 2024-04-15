import ConnectButton from "@/components/wagmi/connectButton";
import CurrencySwitch from "@/components/wagmi/currency-switch";
import NetoworKSelector from "@/components/wagmi/network-selector";
import { DONATION_CONTRACT_ADDRESS } from "@/constants/contract-address";
import { useTokenAllowance } from "@/hooks/wagmi/approvals/useTokenAllowance";
import { useSearchParams } from "next/navigation";
import SyncLoader from "react-spinners/ClipLoader";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Address, erc20Abi, formatUnits, parseEther } from "viem";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import {
  ChainId,
  DONATION_SUPPORTED_CHAINID,
  DONATION_TOKENS,
} from "@/constants/config/chainId";

import donationAbi from "@/constants/abi/donation.abi.json";
import useAddSponsor, { SponsorDetailsType } from "@/hooks/useAddSponsor";
import { useWeb3Modal } from "@web3modal/wagmi/react";

//state to track allowance of inputed toke
enum allowanceState {
  UNKNOWN = "UNKNOWN",
  APPROVED = "APPROVED",
  UNAPPROVED = "UNAPPROVED",
}

enum trxType {
  APPROVAL = "APPROVAL",
  DONATION = "DONATION",
  UNKNOWN = "UNKNOWN",
}

interface Props {
  addName: boolean;
  _donationToken: Address;
  amount: string;
  setAmount: (val: string) => void;

  trxtype: trxType;
  setTrxtype: (trx: trxType) => void;
}

function Web3Donation({
  addName,
  _donationToken,
  amount,
  setAmount,
  trxtype,
  setTrxtype,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { open } = useWeb3Modal();
  const {
    isLoading: addSponsorLoading,
    success: AddSponsorSuccess,
    error: addSponsorError,
    addSponsor,
  } = useAddSponsor();
  const { address, isConnected, chainId } = useAccount();
  const [donationTokenApproval, setDonationTokenApproval] =
    useState<allowanceState>(allowanceState.UNKNOWN);

  const [sponsorDetails, setSponsorDetails] = useState<SponsorDetailsType>({
    name: "",
    twitter: "",
    amount: "",
  });

  const { data: PtokenAllowance, refetch: refetchAllowance } =
    useTokenAllowance({
      chainId,
      token: _donationToken as Address,
      owner: address,
      spender: DONATION_CONTRACT_ADDRESS[chainId as ChainId] as Address,
    });
  let toast = useToast();
  const {
    data: hash,
    isPending,
    isSuccess: isSubmitted,
    isError: isWriteContractError,
    writeContract,
    error: WriteContractError,
  } = useWriteContract();
  //Check approval state when inpute token value]
  const handleDonationAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("donation amount", e.target.value);
    setAmount(e.target.value);

    console.log("this is BigInt value", BigInt(e.target.value));
    console.log(
      "this is approved tokens",
      Number(formatUnits(PtokenAllowance ?? 0n, 18)).toFixed(2),
    );
    console.log("this is value inputed", Number(e.target.value));
    setSponsorDetails((prevState) => ({
      ...prevState,
      amount: parseEther(amount).toString(),
    }));
    PtokenAllowance &&
    Number(formatUnits(PtokenAllowance ?? 0n, 18)) >= Number(e.target.value)
      ? setDonationTokenApproval(allowanceState.APPROVED)
      : setDonationTokenApproval(allowanceState.UNAPPROVED);

    console.log(donationTokenApproval);
  };

  //FETCH DONATION TOKEN BALANCE
  const {
    data: donationTokenBal,
    isFetching: isFetchinDonTokenBal,
    isError,
    isSuccess: isSuccessDonToken,
    refetch: refectBalance,
  } = useReadContract({
    abi: erc20Abi,
    address: _donationToken as Address,
    functionName: "balanceOf",
    args: [address as Address],
    scopeKey: "Donation tokenBalance",
  });

  //APPROVE TOKEN FUNCTION
  const approveToken = () => {
    if (!chainId) return null;

    setTrxtype(trxType.APPROVAL);

    writeContract({
      address: _donationToken as Address,
      abi: erc20Abi,
      functionName: "approve",
      args: [
        DONATION_CONTRACT_ADDRESS[chainId as ChainId] as Address,
        parseEther(amount),
      ],
    });
  };

  // DONATE FUNCTION
  const donatefn = () => {
    if (!chainId || !address) {
      open({ view: "Account" });
    }
    if (
      (addName && sponsorDetails.name == "") ||
      (addName && sponsorDetails.twitter == "")
    ) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Please Fields "Name" and "Twitter" cannot be empty, kindly fill or
            donate anonymously😊
          </Box>
        ),
      });
      return null;
    }
    setTrxtype(trxType.DONATION);

    writeContract({
      address: DONATION_CONTRACT_ADDRESS[chainId as ChainId] as Address,
      abi: donationAbi,
      functionName: "donate",
      args: [_donationToken as Address, parseEther(amount)],
    });
  };

  //TRANSACTIONS RECEIPT

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    isError: isWaitTrxError,
    error: WaitForTransactionReceiptError,
  } = useWaitForTransactionReceipt({
    hash,
  });

  //RECOMPUTE ALLOWANCE STATE AFTER SUCCESSFUL APPROVAL
  const recomputeAllowanceState = () => {
    Number(formatUnits(PtokenAllowance ?? 0n, 18)) >= Number(amount) &&
      setDonationTokenApproval(allowanceState.APPROVED);
    toast({
      position: "top-right",
      render: () => (
        <Box color="white" p={3} bg="blue.500">
          STATE RECOMPUTED
        </Box>
      ),
    });
  };

  //INPUT BOXES HANDLE EVENTS
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSponsorDetails((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
    console.log(sponsorDetails);
  };

  const handleSponsorNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSponsorDetails((prevState) => ({
      ...prevState,
      twitter: event.target.value,
    }));
    console.log(sponsorDetails);
  };

  //Useeffect for approve function
  useEffect(() => {
    trxtype == trxType.APPROVAL && refetchAllowance();
    refectBalance();
    trxtype == trxType.APPROVAL &&
      setDonationTokenApproval(allowanceState.APPROVED);
    trxtype == trxType.APPROVAL && recomputeAllowanceState();
  }, [isConfirmed]);

  //Useeffect for general transaction events
  useEffect(() => {
    isWriteContractError &&
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            {WriteContractError?.message}
          </Box>
        ),
      });
    isConfirmed &&
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            confirmed
          </Box>
        ),
      });

    isConfirmed &&
      trxtype == trxType.DONATION &&
      addName &&
      addSponsor({
        name: sponsorDetails.name,
        twitter: sponsorDetails.twitter,
        amount: sponsorDetails.amount,
      });

    isConfirmed && trxtype == trxType.DONATION && setAmount("");

    isConfirming &&
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Transaction Submitted
          </Box>
        ),
      });
    isWaitTrxError &&
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            {WaitForTransactionReceiptError.name}
            {WaitForTransactionReceiptError.message}
          </Box>
        ),
      });
  }, [isConfirming, isConfirmed, chainId, isWriteContractError]);

  const donationReady: boolean =
    donationTokenApproval == allowanceState.APPROVED;

  return (
    <Box>
      {addName && (
        <Flex
          flexDir={["column", "row", "row"]}
          gap={["0.2rem", "0.2rem", "1rem"]}
          w={["100%"]}
          mb={"1rem"}
        >
          <Box w={["100%", "49%", "49%"]} mb={"1rem"}>
            <Text
              color={"#3A3A3A"}
              fontSize={"14px"}
              fontWeight={"500"}
              mb={"5px"}
              whiteSpace={"nowrap"}
            >
              Name (or pseudonym)
            </Text>
            <Box border={"1px solid #E2E8F0"} p={"5px"} borderRadius={"md"}>
              <Input
                p={"0"}
                _focus={{
                  boxShadow: "none",
                }}
                border={"none"}
                type="text"
                placeholder="Name(or pseudonym)"
                onChange={handleUsernameChange}
              />
            </Box>
          </Box>
          <Box w={["100%", "49%", "49%"]} mb={"1rem"}>
            <Text
              color={"#3A3A3A"}
              fontSize={"14px"}
              fontWeight={"500"}
              mb={"5px"}
              whiteSpace={"nowrap"}
            >
              X(Twitter) handle
            </Text>
            <Box border={"1px solid #E2E8F0"} p={"5px"} borderRadius={"md"}>
              <Input
                p={"0"}
                _focus={{
                  boxShadow: "none",
                }}
                border={"none"}
                type="text"
                placeholder="twitter(username)"
                onChange={handleSponsorNameChange}
              />
            </Box>
          </Box>
        </Flex>
      )}
      <Flex flexDir={["column", "row", "row"]} gap={"16px"} mb={"24px"}>
        <Box w={"100%"}>
          <Text
            color={"#3A3A3A"}
            fontSize={"14px"}
            fontWeight={"500"}
            mb={"5px"}
          >
            Amount
          </Text>
          <Flex
            border={"1px solid #E2E8F0"}
            py={"5px"}
            pr={"10px"}
            pl={"5px"}
            borderRadius={"md"}
            alignItems={"center"}
          >
            <Input
              p={"0"}
              type="number"
              _focus={{
                boxShadow: "none",
              }}
              value={amount}
              border={"none"}
              onChange={handleDonationAmount}
            />
            <Box>
              <CurrencySwitch />
            </Box>
            {isSuccessDonToken && (
              <Box marginLeft={"4px"}>
                <Text whiteSpace={"nowrap"}>
                  {" "}
                  Bal:{" "}
                  <span>
                    {Number(formatUnits(donationTokenBal, 18)).toFixed(2)}
                  </span>{" "}
                </Text>
              </Box>
            )}
          </Flex>
        </Box>

        <VStack w={"100%"} display={"flex"} gap="2" alignItems={"start"}>
          <Text color={"#3A3A3A"} fontSize={"14px"} fontWeight={"500"}>
            Select Chain
          </Text>
          <NetoworKSelector
            CHAINS_LIST_TO_SELECT_FROM={DONATION_SUPPORTED_CHAINID}
          />
        </VStack>
      </Flex>

      <Flex justifyContent={["center", "flex-end", "flex-end"]}>
        {!isConnected && <ConnectButton />}
        {isConnected && donationReady ? (
          <Button
            display={"flex"}
            w={["100%", "160px", "160px"]}
            py={"11px"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
            borderRadius={"8px"}
            border={"1px solid #8140CE"}
            bg={"#907EF4"}
            _hover={{ bg: "#907EF4" }}
            disabled={
              donationTokenApproval == allowanceState.UNKNOWN ? true : false
            }
            onClick={() => {
              onOpen();
            }}
          >
            <Text
              color={"#FDFDFD"}
              fontSize={"14px"}
              fontWeight={"500"}
              lineHeight={"23.1px"}
            >
              Contribute
            </Text>
          </Button>
        ) : (
          isConnected && (
            <Button
              display={"flex"}
              w={["100%", "160px", "160px"]}
              py={"11px"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"10px"}
              borderRadius={"8px"}
              border={"1px solid #8140CE"}
              bg={"#907EF4"}
              _hover={{ bg: "#907EF4" }}
              onClick={approveToken}
            >
              Approve
            </Button>
          )
        )}

        <TransactionModal
          donationAmount={amount}
          isDonationReady={donationReady}
          approvefn={approveToken}
          hash={hash}
          isPending={isPending}
          isSubmitted={isSubmitted}
          isErred={isWriteContractError}
          isOpen={isOpen}
          onClose={onClose}
          donatefn={donatefn}
        />
      </Flex>
    </Box>
  );
}

export default Web3Donation;

type modalProps = {
  isOpen: boolean;
  onClose: () => void;

  donationAmount: string;
  donatefn: () => void;
  approvefn: () => void;

  //trx states

  isSubmitted: boolean;
  isPending: boolean;
  isErred: boolean;

  isDonationReady: boolean;

  hash: Address | undefined;
};
const TransactionModal = ({
  isOpen,
  onClose,

  donatefn,
  approvefn,

  donationAmount,

  isSubmitted,
  isPending,
  isErred,

  isDonationReady,

  hash,
}: modalProps) => {
  const searchParams = useSearchParams();
  const [userConfirmation, setUserConfirmation] = useState<boolean>(false);
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Review Transactions</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box w={"100%"}>
            {isSubmitted ? (
              <Flex alignItems={"center"} flexDir={"column"} gap={"1.5rem"}>
                <IoCheckmarkCircleSharp size={100} color="#00FF00" />
                <Text>Donation Successful. God Bless!</Text>
              </Flex>
            ) : (
              <>
                {userConfirmation && isPending ? (
                  <Flex flexDir={"column"} alignItems={"center"} gap={"1.5rem"}>
                    <SyncLoader color="#36d7b7" size={45} />
                    <Text>Confirm Donation</Text>
                    <Text>Proceed in Wallet</Text>
                  </Flex>
                ) : (
                  <Flex flexDir={"column"} alignItems={"center"} gap={"2rem"}>
                    <Text>You are about to DONATE</Text>
                    <Text>
                      {donationAmount} {searchParams.get("donationtoken")}
                    </Text>
                    <Text> to ETHABUJA MAINTENERS</Text>
                  </Flex>
                )}
              </>
            )}
          </Box>

          {/* <Button>
            {isPending && "TRANSACTION PENDING"}
            {isSubmitted && "TRANSACTION SUCCESFULL"}
            {isErred && "TRANSACTION ERROR"}
            {hash && hash}
          </Button> */}
        </ModalBody>

        {!isPending && !userConfirmation && (
          <ModalFooter>
            <Button
              bg={"green.500"}
              textColor={"white"}
              w={"100%"}
              onClick={() => {
                setUserConfirmation(true);
                donatefn();
              }}
            >
              Confirm Donation{" "}
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

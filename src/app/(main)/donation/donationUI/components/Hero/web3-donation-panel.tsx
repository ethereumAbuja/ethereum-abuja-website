import ConnectButton from "@/components/wagmi/connectButton";
import CurrencySwitch from "@/components/wagmi/currency-switch";
import NetoworKSelector from "@/components/wagmi/network-selector";
import { DONATION_CONTRACT_ADDRESS } from "@/constants/contract-address";
import { useTokenAllowance } from "@/hooks/wagmi/approvals/useTokenAllowance";
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
import { ChainId, DONATION_TOKENS } from "@/constants/config/chainId";

import donationAbi from "@/constants/abi/donation.abi.json";
import useAddSponsor from "@/hooks/useAddSponsor";

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
  //   const [amount, setAmount] = useState("");
  const { address, isConnected, chainId } = useAccount();
  const [donationTokenApproval, setDonationTokenApproval] =
    useState<allowanceState>(allowanceState.UNKNOWN);

  const [spoonsorDetails, setSponsorDetails] = useState<{
    name: string;
    twitter: string;
    amount: string;
  }>({
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
    isSuccess,
    isError: mainIsError,
    writeContract,
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

    const newAllowance = useTokenAllowance({
      chainId,
      token: _donationToken as Address,
      owner: address,
      spender: DONATION_CONTRACT_ADDRESS[chainId as ChainId] as Address,
    });

    isSuccess && setDonationTokenApproval(allowanceState.APPROVED);

    newAllowance &&
      Number(formatUnits(newAllowance.data ?? 0n, 18)) >= Number(amount) &&
      setDonationTokenApproval(allowanceState.APPROVED);
  };

  // DONATE FUNCTION

  const donatefn = () => {
    if (!chainId || !address) return null;

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
    isError: trxErrors,
  } = useWaitForTransactionReceipt({
    hash,
  });

  //RECOMPUTE ALLOWANCE STATE AFTER SUCCESSFUL APPROVAL
  const recomputeAllowanceState = () => {
    Number(formatUnits(PtokenAllowance ?? 0n, 18)) >= Number(amount) &&
      setDonationTokenApproval(allowanceState.APPROVED);
  };

  //INPUT BOXES HANDLE EVENTS
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSponsorDetails((prevState) => ({
      ...prevState,
      username: event.target.value,
    }));
    console.log(spoonsorDetails);
  };

  const handleSponsorNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSponsorDetails((prevState) => ({
      ...prevState,
      sponsorName: event.target.value,
    }));
    console.log(spoonsorDetails);
  };

  const {
    isLoading: addSponsorLoading,
    success: AddSponsorSuccess,
    error: addSponsorError,
    addSponsor,
  } = useAddSponsor();

  useEffect(() => {
    refectBalance();
    isConfirmed &&
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            confirmed
          </Box>
        ),
      });

    isConfirmed && addSponsor();

    isConfirming &&
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Transaction Submitted
          </Box>
        ),
      });
    trxErrors &&
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Error occured while Donating
          </Box>
        ),
      });

    trxtype == trxType.APPROVAL && isConfirmed && refetchAllowance();
    recomputeAllowanceState();
  }, [isConfirming, isConfirmed, chainId]);

  const donationReady: boolean =
    donationTokenApproval == allowanceState.APPROVED ||
    donationTokenApproval == allowanceState.UNKNOWN;

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
          <NetoworKSelector />
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
            // onClick={donatefn}
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
          isSuccess={isSuccess}
          isErred={mainIsError}
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

  isSuccess: boolean;
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

  isSuccess,
  isPending,
  isErred,

  isDonationReady,

  hash,
}: modalProps) => {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Transactions</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Text>Hello world</Text>

          <Button>
            {isPending && "TRANSACTION PENDING"}
            {isSuccess && "TRANSACTION SUCCESFULL"}
            {isErred && "TRANSACTION ERROR"}
            {hash && hash}
          </Button>
        </ModalBody>

        <ModalFooter>
          <Button onClick={donatefn}>Donate</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

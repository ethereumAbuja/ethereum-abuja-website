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
import { TransactionModal } from "./donation-modal";
import { allowanceState, trxType } from "@/utils";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { TokenQuantityInput } from "@/components/TokenQuantityInput";
import { formatBalance } from "@/utils/formatBalance";
import BalancePanel from "./balance-panel";

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
    // console.log("donation amount", e.target.value);
    setAmount(e.target.value);

    // console.log("this is BigInt value", BigInt(e.target.value));
    // console.log(
    //   "this is approved tokens",
    //   Number(formatUnits(PtokenAllowance ?? 0n, 18)).toFixed(2)
    // );
    // console.log("this is value inputed", Number(e.target.value));
    setSponsorDetails((prevState) => ({
      ...prevState,
      amount: parseEther(amount).toString(),
    }));
    PtokenAllowance &&
    Number(formatUnits(PtokenAllowance ?? 0n, 18)) >= Number(e.target.value)
      ? setDonationTokenApproval(allowanceState.APPROVED)
      : setDonationTokenApproval(allowanceState.UNAPPROVED);

    // console.log(donationTokenApproval);
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

  const DONATIONTOKENBALANCE = useSelector(
    (state: RootState) => state.donationTransactionSlice.DonationTokenBalance
  );
  // console.log("this is balance from redux", DONATIONTOKENBALANCE);

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    isError: isWaitTrxError,
    error: WaitForTransactionReceiptError,
  } = useWaitForTransactionReceipt({
    hash,
  });

  //INPUT BOXES HANDLE EVENTS
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSponsorDetails((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
    console.log(sponsorDetails);
  };

  const handleSponsorNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSponsorDetails((prevState) => ({
      ...prevState,
      twitter: event.target.value,
    }));
    console.log(sponsorDetails);
  };

  const isInsufficientBalance: boolean = Number(amount) > DONATIONTOKENBALANCE;
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
                  Bal: <BalancePanel />
                </Text>
              </Box>
            )}
          </Flex>
          <TokenQuantityInput
            onChange={setAmount}
            quantity={amount}
            maxValue={formatBalance(donationTokenBal ?? BigInt(0))}
          />
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
      <Text>
        {/* {
          ? "INSDUFFICIENT BALANCE"
          : "YOU CAN PROCEED WITH TRANSACTION"} */}
      </Text>

      {/* 
     
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     // Connect Buttin and Contribute Button
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     */}
      <Flex justifyContent={["center", "flex-end", "flex-end"]}>
        {!isConnected && <ConnectButton />}
        {isConnected && !isInsufficientBalance ? (
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
            color={"#FDFDFD"}
            fontSize={"14px"}
            fontWeight={"500"}
            lineHeight={"23.1px"}
            onClick={() => {
              onOpen();
            }}
          >
            Contribute
          </Button>
        ) : (
          isConnected &&
          isInsufficientBalance && (
            <Button
              display={"flex"}
              w={["100%", "200px", "200px"]}
              p="10px 20px"
              justifyContent={"center"}
              alignItems={"center"}
              fontWeight={400}
              gap={"10px"}
              borderRadius={"8px"}
              colorScheme="red"
            >
              InSufficientBalance
            </Button>
          )
        )}

        <TransactionModal
          donationAmount={amount}
          // approvefn={approveToken}
          // hash={hash}
          // isPending={isPending}
          // isSubmitted={isSubmitted}
          // isErred={isWriteContractError}
          isOpen={isOpen}
          onClose={onClose}
          // donatefn={donatefn}
          addName={addName}
          sponsorDetails={sponsorDetails}
        />
      </Flex>
    </Box>
  );
}

export default Web3Donation;
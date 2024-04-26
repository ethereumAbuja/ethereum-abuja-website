"use client";
import { useSearchParams } from "next/navigation";
import SyncLoader from "react-spinners/ClipLoader";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Address, erc20Abi, formatUnits, parseEther } from "viem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { trxType } from "../../utils";
import { useTokenAllowance } from "@/hooks/wagmi/approvals/useTokenAllowance";
import { DONATION_CONTRACT_ADDRESS } from "@/constants/contract-address";
import { ChainId } from "@/constants/config/chainId";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { setOngoingTrxType } from "@/store/donationTransactionSlice";
import useAddSponsor, { SponsorDetailsType } from "@/hooks/useAddSponsor";
import donationAbi from "@/constants/abi/donation.abi.json";

type modalProps = {
  isOpen: boolean;
  onClose: () => void;
  donationAmount: string;
  // donatefn?: () => void;
  // approvefn: () => void;

  //trx states
  // isSubmitted: boolean;
  // isPending?: boolean;
  // isErred: boolean;

  // hash: Address | undefined;
  addName: boolean;
  sponsorDetails: SponsorDetailsType;
};
export const TransactionModal = ({
  isOpen,
  onClose,

  // donatefn,
  // approvefn,

  donationAmount,

  // isSubmitted,
  // isPending,
  // isErred,

  // hash,

  addName,
  sponsorDetails,
}: modalProps) => {
  const {
    data: hash,
    isPending,
    isSuccess: isTrxSubmitted,
    isError: isWriteContractError,
    writeContract,
    error: WriteContractError,
  } = useWriteContract();

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    isError: isWaitTrxError,
    error: WaitForTransactionReceiptError,
  } = useWaitForTransactionReceipt({
    hash,
  });
  const searchParams = useSearchParams();

  const [userConfirmation, setUserConfirmation] = useState<boolean>(false); //The state is to remove donation token from the screen when Donation tranaction begins
  const dispatch = useDispatch<AppDispatch>();
  const { chainId, address } = useAccount();

  const currentTransactionType = useSelector(
    (state: RootState) => state.donationTransactionSlice.OngoingTransactionType,
  );

  const _donationToken = useSelector(
    (state: RootState) => state.donationTokenSlice.tokenAddress,
  );

  let toast = useToast();

  const {
    isLoading: addSponsorLoading,
    success: AddSponsorSuccess,
    error: addSponsorError,
    addSponsor,
  } = useAddSponsor();

  //check Allowance
  const { data: allowances, refetch: refetchAllowance } = useTokenAllowance({
    chainId,
    token: _donationToken as Address,
    owner: address,
    spender: DONATION_CONTRACT_ADDRESS[chainId as ChainId] as Address,
  });

  //APPROVE FUNCTION
  const approveToken = () => {
    if (!chainId) return null;

    dispatch(setOngoingTrxType(trxType.APPROVAL));

    writeContract({
      address: _donationToken as Address,
      abi: erc20Abi,
      functionName: "approve",
      args: [
        DONATION_CONTRACT_ADDRESS[chainId as ChainId] as Address,
        parseEther(donationAmount),
      ],
    });
  };
  //DONATE FUNCTION
  const donatefn = () => {
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
    dispatch(setOngoingTrxType(trxType.DONATION));

    writeContract({
      address: DONATION_CONTRACT_ADDRESS[chainId as ChainId] as Address,
      abi: donationAbi,
      functionName: "donate",
      args: [_donationToken as Address, parseEther(donationAmount)],
    });
  };

  //USE EFFECT
  useEffect(() => {
    isConfirmed && refetchAllowance();
  }, [isConfirmed]);

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
      currentTransactionType == trxType.DONATION &&
      addName &&
      addSponsor({
        name: sponsorDetails.name,
        twitter: sponsorDetails.twitter,
        amount: sponsorDetails.amount,
      });

    // isConfirmed && currentTransactionType == trxType.DONATION && setAm/ount("");

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

  const hasEnoughAllowances: boolean =
    Number(formatUnits(allowances ?? 0n, 18)) >= Number(donationAmount);

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Review Transactions</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box w={"100%"}>
            {isTrxSubmitted && currentTransactionType == trxType.DONATION ? (
              <Flex alignItems={"center"} flexDir={"column"} gap={"1.5rem"}>
                <IoCheckmarkCircleSharp size={100} color="#00FF00" />
                <Text>Donation Successful. God Bless!</Text>
              </Flex>
            ) : (
              <>
                {hasEnoughAllowances ? (
                  <Box>
                    {" "}
                    <Text>Donate now</Text>
                    <Text>
                      You are about to Donate {donationAmount}{" "}
                      {searchParams.get("donationtoken")}
                    </Text>
                  </Box>
                ) : (
                  <Text>Aprrove tokens</Text>
                )}
              </>
            )}
          </Box>
          <Box>
            {isPending && (
              <VStack>
                <SyncLoader size={45} color="#0000FF" />
                <Text>Confirm transaction in Wallet...</Text>
              </VStack>
            )}
          </Box>
        </ModalBody>

        {/* Buttons */}

        {/* no approval. prompt user to approve tokens */}
        {!hasEnoughAllowances && (
          <Button onClick={() => approveToken()}>Approve Tokens</Button>
        )}

        {/* approval completed. donate tokens */}
        {hasEnoughAllowances && !userConfirmation && (
          <Button
            onClick={() => {
              setUserConfirmation(true);
              donatefn();
            }}
          >
            Confirm Donation
          </Button>
        )}
      </ModalContent>
    </Modal>
  );
};

{
  /* <Box>
{hasEnoughAllowances ? "Enough Approval" : "Not enough aPRROVAL"}
{currentTransactionType == trxType.UNKNOWN
  ? "Trxtype Unknown"
  : currentTransactionType == trxType.DONATION
  ? "TRXTYPE = Donate"
  : "Trx type is approval"}
</Box> */
}

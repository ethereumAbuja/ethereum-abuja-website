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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Address, erc20Abi, formatUnits, parseEther } from "viem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { trxType } from "../../utils";
import { useTokenAllowance } from "@/hooks/wagmi/approvals/useTokenAllowance";
import { DONATION_CONTRACT_ADDRESS } from "@/constants/contract-address";
import { ChainId } from "@/constants/config/chainId";
import { useAccount, useWriteContract } from "wagmi";
import { setOngoingTrxType } from "@/store/donationTransactionSlice";
import { SponsorDetailsType } from "@/hooks/useAddSponsor";
import donationAbi from "@/constants/abi/donation.abi.json";

type modalProps = {
  isOpen: boolean;
  onClose: () => void;

  donationAmount: string;
  donatefn?: () => void;
  approvefn: () => void;

  //trx states

  isSubmitted: boolean;
  isPending?: boolean;
  isErred: boolean;

  isDonationReady: boolean;

  // hash: Address | undefined;

  addName: boolean;
  sponsorDetails: SponsorDetailsType;
};
export const TransactionModal = ({
  isOpen,
  onClose,

  // donatefn,
  approvefn,

  donationAmount,

  isSubmitted,
  // isPending,
  isErred,

  isDonationReady,

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
  const searchParams = useSearchParams();
  const [userConfirmation, setUserConfirmation] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { chainId, address } = useAccount();
  const currentTransactionType = useSelector(
    (state: RootState) => state.donationTransactionSlice.OngoingTransactionType,
  );

  const _donationToken = useSelector(
    (state: RootState) => state.donationTokenSlice.tokenAddress,
  );

  let toast = useToast();
  //check Allowance
  const { data: allowances, refetch: refetchAllowance } = useTokenAllowance({
    chainId,
    token: _donationToken as Address,
    owner: address,
    spender: DONATION_CONTRACT_ADDRESS[chainId as ChainId] as Address,
  });

  const hasEnoughAllowances: boolean =
    Number(formatUnits(allowances ?? 0n, 18)) >= Number(donationAmount);

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
      args: [_donationToken as Address, parseEther(amount)],
    });
  };
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Review Transactions</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box w={"100%"}>
            {isSubmitted && currentTransactionType == trxType.DONATION ? (
              <Flex alignItems={"center"} flexDir={"column"} gap={"1.5rem"}>
                <IoCheckmarkCircleSharp size={100} color="#00FF00" />
                <Text>Donation Successful. God Bless!</Text>
              </Flex>
            ) : (
              <>
                {hasEnoughAllowances ? (
                  <Text>Approved, Donate now</Text>
                ) : (
                  <Text>Aprrove tokens</Text>
                )}
              </>
            )}
          </Box>
        </ModalBody>

        {currentTransactionType == trxType.UNKNOWN && !hasEnoughAllowances && (
          <Button
            onClick={() => {
              dispatch(setOngoingTrxType(trxType.APPROVAL));
            }}
          >
            Approve and Donate
          </Button>
        )}

        {/* no approval. prompt user to approve tokens */}
        {currentTransactionType == trxType.APPROVAL && !hasEnoughAllowances && (
          <Button onClick={() => approveToken()}>Approve Tokens</Button>
        )}

        {/* approval completed. donate tokens */}
        {currentTransactionType == trxType.APPROVAL ||
          (currentTransactionType == trxType.DONATION &&
            hasEnoughAllowances && (
              <Button onClick={() => donatefn()}>Confirm Donation</Button>
            ))}

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

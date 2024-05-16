"use client";

// TODO
//Fetch Balance here so it can be refetch on successfull donation

import { useSearchParams } from "next/navigation";
import SyncLoader from "react-spinners/ClipLoader";
import {
  Box,
  Button,
  Flex,
  Stack,
  chakra,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Address, erc20Abi, formatUnits, parseEther } from "viem";
import { useAppSelector, useAppDispatch } from "@/hooks/rtkHooks";
import { RootState } from "@/store/store";
import { trxType } from "@/utils";
import { useTokenAllowance } from "@/hooks/wagmi/approvals/useTokenAllowance";
import { DONATION_CONTRACT_ADDRESS } from "@/constants/contract-address";
import { ChainId } from "@/constants/config/chainId";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import {
  setDonationAmount,
  setOngoingTrxType,
  setReftchHerosList,
} from "@/store/donationTransactionSlice";
import useAddSponsor, { SponsorDetailsType } from "@/hooks/useAddSponsor";
import donationAbi from "@/constants/abi/donation.abi.json";
import ModalComponent from "@/components/ModalComponent";
import CustomToast from "@/components/CustomToast";
import CustomErrorToast from "@/components/CustomErrorToast";

type modalProps = {
  isOpen: boolean;
  onClose: () => void;
  donationAmount: string;
  addName: boolean;
  sponsorDetails: SponsorDetailsType;
};

export const TransactionModal = ({
  isOpen,
  onClose,
  addName,
  sponsorDetails,
}: modalProps) => {
  const currentTransactionType = useAppSelector(
    (state: RootState) => state.donationTransactionSlice.OngoingTransactionType,
  );
  const donationAmount = useAppSelector(
    (state: RootState) => state.donationTransactionSlice.DonationAmount,
  );

  const _donationToken = useAppSelector(
    (state: RootState) => state.donationTokenSlice.tokenAddress,
  );

  const {
    data: hash,
    isPending,
    isSuccess: isTrxSubmitted,
    isError: isWriteContractError,
    writeContract,
    error: WriteContractError,
    reset,
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

  const [userConfirmation, setUserConfirmation] = useState<boolean>(false);
  //The state is to remove donation token from the screen when Donation tranaction begins
  const dispatch = useAppDispatch();

  const { chainId, address } = useAccount();

  let toast = useToast();

  const { addSponsor } = useAddSponsor();

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
      CustomErrorToast(
        toast,
        `Please Fields "Name" and "Twitter" cannot be empty, kindly fill or donate anonymously😊`,
        5000,
        "bottom",
      );
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

  const resetDonationState = () => {
    isConfirmed &&
      currentTransactionType == trxType.DONATION &&
      setUserConfirmation(false);
    isConfirmed && currentTransactionType == trxType.DONATION && reset();
    dispatch(setDonationAmount("0.10"));
    dispatch(setOngoingTrxType(trxType.UNKNOWN));
  };

  useEffect(() => {
    isConfirmed && trxType.APPROVAL && refetchAllowance();
  }, [isConfirmed]);

  useEffect(() => {
    isWriteContractError &&
      CustomErrorToast(
        toast,
        `You can not donate with 0.00 amount!`,
        //${WriteContractError?.message}
        5000,
        "top-right",
      );

    isConfirmed && CustomToast(toast, "Confirmed", 4000, "top-right");

    isConfirmed &&
      currentTransactionType == trxType.DONATION &&
      addName &&
      addSponsor({
        name: sponsorDetails.name,
        twitter: sponsorDetails.twitter,
        amount: sponsorDetails.amount,
      });

    // isConfirmed &&
    //   currentTransactionType == trxType.DONATION &&
    //   addName &&
    //   dispatch(setReftchHerosList(true));

    if (isConfirmed && currentTransactionType == trxType.DONATION && addName) {
      const timeoutId = setTimeout(() => {
        dispatch(setReftchHerosList(true));
      }, 5000);
      return () => clearTimeout(timeoutId);
    }

    isConfirmed &&
      currentTransactionType == trxType.DONATION &&
      addName &&
      dispatch(setReftchHerosList(true));

    isConfirming &&
      CustomToast(toast, "Transaction Submitted", 4000, "top-right");

    isWaitTrxError &&
      CustomErrorToast(
        toast,
        `${WaitForTransactionReceiptError.name}, ${WaitForTransactionReceiptError.message}`,
        5000,
        "top-right",
      );
  }, [isConfirming, isConfirmed, chainId, isWriteContractError]);

  const hasEnoughAllowances: boolean =
    Number(formatUnits(allowances ?? 0n, 18)) >= Number(donationAmount);

  return (
    <ModalComponent
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Stack w="100%">
        <Flex justify="center" alignItems="center" flexDir="column">
          <Image
            src="image/transaction-successful.png"
            w={"122px"}
            alt="an image"
          />

          <Box w={"100%"}>
            {isConfirming && currentTransactionType == trxType.DONATION ? (
              <Flex alignItems={"center"} flexDir={"column"} gap={"1.5rem"}>
                <Text fontWeight={600} fontSize="18px">
                  Transaction Successful
                </Text>
                <Text as="span" fontSize="14px">
                  Thank you for supporting the ETHAbuja Community
                </Text>

                <Button
                  mt="40px"
                  w="300px"
                  color="white"
                  onClick={() => {
                    resetDonationState();
                    onClose();
                  }}
                  bgColor="black"
                  _hover={{
                    bgColor: "black",
                  }}
                >
                  Close
                </Button>
              </Flex>
            ) : (
              <>
                {hasEnoughAllowances ? (
                  <Box textAlign="center">
                    {" "}
                    <Text fontWeight={600} fontSize="18px">
                      Donate now
                    </Text>
                    <Text>
                      You are about to Donate{" "}
                      <chakra.span fontWeight={600}>
                        {donationAmount} {searchParams.get("donationtoken")}
                      </chakra.span>
                    </Text>
                  </Box>
                ) : (
                  <>
                    <Text textAlign="center" fontWeight={600} fontSize="18px">
                      Approve this transaction
                    </Text>

                    <Button
                      onClick={() => approveToken()}
                      bgColor="black"
                      color="white"
                      _hover={{
                        bgColor: "black",
                      }}
                    >
                      Approve
                    </Button>
                  </>
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
            {isConfirming && (
              <VStack>
                <SyncLoader size={45} color="#0000FF" />
                <Text>Confirm transaction in Wallet...</Text>
              </VStack>
            )}
          </Box>
        </Flex>

        {/*---------------------------------- Buttons ----------------------------------*/}

        {/* no approval. prompt user to approve tokens */}
        {!hasEnoughAllowances &&
          currentTransactionType !== trxType.DONATION && (
            <>
              {isConfirming || isPending ? (
                ""
              ) : (
                <Flex flexDir="column" mt="40px">
                  <Button
                    onClick={() => approveToken()}
                    bgColor="black"
                    color="white"
                    _hover={{
                      bgColor: "black",
                    }}
                  >
                    Approve
                  </Button>

                  <Button
                    mt="10px"
                    onClick={onClose}
                    bgColor="none"
                    border="1px solid"
                    _hover={{
                      bgColor: "black",
                      color: "white",
                    }}
                  >
                    Cancel
                  </Button>
                </Flex>
              )}
            </>
          )}
          
        {/* ------------------------------------ approval completed. donate tokens ------------------------------------*/}
        {hasEnoughAllowances && !userConfirmation && (
          <Button
            mt="40px"
            bgColor="black"
            color="white"
            _hover={{
              bgColor: "black",
            }}
            onClick={() => {
              setUserConfirmation(true);
              donatefn();
            }}
          >
            Confirm Your Donation
          </Button>
        )}
      </Stack>
    </ModalComponent>
  );
};

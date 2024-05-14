"use client";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
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

  useEffect(() => {
    isConfirmed && refetchAllowance();
  }, [isConfirmed]);

  useEffect(() => {
    isWriteContractError &&
      CustomErrorToast(
        toast,
        `${WriteContractError?.message}`,
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

    isConfirmed &&
      currentTransactionType == trxType.DONATION &&
      addName &&
      dispatch(setReftchHerosList(true));

    isConfirmed &&
      currentTransactionType == trxType.DONATION &&
      addName &&
      dispatch(setReftchHerosList(true));

    isConfirmed && currentTransactionType == trxType.DONATION && reset();

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
            {isTrxSubmitted && currentTransactionType == trxType.DONATION ? (
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
                  onClick={onClose}
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
                  <Text textAlign="center" fontWeight={600} fontSize="18px">
                    Aprrove this transaction
                  </Text>
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
        </Flex>

        {/*---------------------------------- Buttons ----------------------------------*/}

        {/* no approval. prompt user to approve tokens */}
        {!hasEnoughAllowances && (
          <Flex flexDir="column" mt="40px">
            <Button
              onClick={() => approveToken()}
              bgColor="black"
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
              }}
            >
              Cancel
            </Button>
          </Flex>
        )}

        {/* ------------------------------------ approval completed. donate tokens ------------------------------------*/}
        {hasEnoughAllowances && !userConfirmation && (
          <Button
            mt="40px"
            bgColor="black"
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

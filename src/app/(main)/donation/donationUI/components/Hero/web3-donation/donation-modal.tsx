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
  Link,
} from "@chakra-ui/react";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
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
  setOngoingTrxType,
  setReftchHerosList,
} from "@/store/donationTransactionSlice";

import useAddSponsor, { SponsorDetailsType } from "@/hooks/useAddSponsor";
import donationAbi from "@/constants/abi/donation.abi.json";
import ModalComponent from "@/components/ModalComponent";
import CustomToast from "@/components/CustomToast";
import CustomErrorToast from "@/components/CustomErrorToast";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface modalProps {
  refetchBalance: any;
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  setAmount: (val: string) => void;
  addName: boolean;
  sponsorDetails: SponsorDetailsType;
  setSponsorDetails: Dispatch<SetStateAction<SponsorDetailsType>>;
}

export const TransactionModal = ({
  refetchBalance,
  isOpen,
  onClose,
  addName,
  sponsorDetails,
  amount,
  setAmount,
  setSponsorDetails,
}: modalProps) => {
  const currentTransactionType = useAppSelector(
    (state: RootState) => state.donationTransactionSlice.OngoingTransactionType,
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

  const [confirmApproval, setConfirmApproval] = useState<boolean>(false);
  const [confirmDonation, setConfirmeDonation] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { chainId, address, chain } = useAccount();

  let toast = useToast();

  const { addSponsor } = useAddSponsor();

  const { data: allowances, refetch: refetchAllowance } = useTokenAllowance({
    chainId,
    token: _donationToken as Address,
    owner: address,
    spender: DONATION_CONTRACT_ADDRESS[chainId as ChainId] as Address,
  });

  //APPROVE FUNCTION
  const approveToken = () => {
    if (!chainId) return null;
    if (!amount) return;

    dispatch(setOngoingTrxType(trxType.APPROVAL));

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

  //DONATE FUNCTION
  const donatefn = () => {
    if (
      (addName && sponsorDetails.name == "") ||
      (addName && sponsorDetails.twitter == "")
    ) {
      CustomErrorToast(
        toast,
        `Please Fields "Name" and "Twitter" cannot be empty, kindly fill or donate anonymously😊`,
        3000,
        "top-right",
      );
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

  const resetDonationState = () => {
    setConfirmApproval(false);
    setConfirmeDonation(false);
    reset();
    setAmount("");
    dispatch(setOngoingTrxType(trxType.UNKNOWN));
  };

  // rest states on initial load
  useEffect(() => {
    resetDonationState();
  }, []);

  useEffect(() => {
    isConfirmed && trxType.APPROVAL && refetchAllowance();
  }, [isConfirmed]);

  useEffect(() => {
    isWriteContractError &&
      CustomErrorToast(
        toast,
        `An error occured, try again`,
        //${WriteContractError?.message}
        3000,
        "top-right",
      );

    isConfirmed &&
      CustomToast(toast, "Transaction Confirmed", 3000, "top-right");

    isConfirmed && currentTransactionType == trxType.DONATION && setAmount("");

    isConfirmed &&
      currentTransactionType == trxType.DONATION &&
      addName &&
      addSponsor({
        name: sponsorDetails.name,
        twitter: sponsorDetails.twitter,
        amount: sponsorDetails.amount,
      });

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
      CustomToast(toast, "Transaction Submitted", 3000, "top-right");

    isWaitTrxError &&
      CustomErrorToast(
        toast,
        `${WaitForTransactionReceiptError.name}, ${WaitForTransactionReceiptError.message}`,
        5000,
        "top-right",
      );
  }, [isConfirming, isConfirmed, chainId, isWriteContractError]);

  const hasEnoughAllowances: boolean =
    Number(formatUnits(allowances ?? 0n, 18)) >= Number(amount);

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
            {isConfirmed && currentTransactionType == trxType.DONATION ? (
              <Flex alignItems={"center"} flexDir={"column"} gap={"1.5rem"}>
                <Text fontWeight={600} fontSize="18px">
                  Transaction Successful
                </Text>
                <Text as="span" fontSize="14px">
                  Thank you for supporting the ETHAbuja Community
                </Text>
                {/* --------------------------- Show Blockexplorer ------------------------- */}
                {
                  <Link
                    href={`${
                      chain && chain?.blockExplorers?.default.url
                    }/tx/${hash}`}
                    isExternal
                  >
                    View transaction on blockexplorer{" "}
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                }
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
                        {amount} {searchParams.get("donationtoken")}
                      </chakra.span>
                    </Text>
                  </Box>
                ) : (
                  <>
                    <Text textAlign="center" fontWeight={600} fontSize="18px">
                      Approve this transaction
                    </Text>
                  </>
                )}
              </>
            )}
          </Box>
          <Box>
            {isPending && !isTrxSubmitted && (
              <VStack>
                <SyncLoader size={45} color="#0000FF" />
                <Text>Confirm transaction in Wallet...</Text>
              </VStack>
            )}
            {isConfirming && !isConfirmed && (
              <VStack>
                <SyncLoader size={45} color="#0000FF" />
                <Text>Confirm transaction in Wallet...</Text>
              </VStack>
            )}
          </Box>
        </Flex>

        {/*---------------------------------- Buttons ----------------------------------*/}

        {/* close button when an error occured */}

        {isWriteContractError && (
          <Button
            mt="40px"
            w="100%"
            textAlign="center"
            mx="auto"
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
        )}

        {/* ---------------------------- no approval. prompt user to approve tokens ----------------------------- */}

        {!hasEnoughAllowances &&
          !confirmApproval &&
          !isWriteContractError &&
          currentTransactionType !== trxType.DONATION && (
            <Flex flexDir="column" mt="40px">
              <Button
                onClick={() => {
                  setConfirmApproval(true);
                  approveToken();
                }}
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
                onClick={() => {
                  resetDonationState();
                  onClose();
                }}
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

        {/* ------------------------------------ approval completed. donate tokens ------------------------------------*/}
        {hasEnoughAllowances && !confirmDonation && !isWriteContractError && (
          <Flex flexDir="column" mt="40px">
            <Button
              mt="40px"
              bgColor="black"
              color="white"
              _hover={{
                bgColor: "black",
              }}
              onClick={() => {
                setConfirmeDonation(true);
                donatefn();
              }}
            >
              Confirm Your Donation
            </Button>
            <Button
              mt="10px"
              onClick={() => {
                resetDonationState();
                onClose();
              }}
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
      </Stack>
    </ModalComponent>
  );
};

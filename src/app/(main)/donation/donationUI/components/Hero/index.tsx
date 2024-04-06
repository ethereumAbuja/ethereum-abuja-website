"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Image,
  Input,
  Text,
  Tooltip,
  Button,
  useToast,
} from "@chakra-ui/react";
import { ETHABJ_SVG } from "@/assets/svg";
import "../../../../../globals.css";
import CustomToast from "@/components/CustomToast";
import CustomErrorToast from "@/components/CustomErrorToast";
import clipboardCopy from "clipboard-copy";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { ETHABJ_WALLET_ADDRESS } from "@/utils/config";

import {
  DONATION_CONTRACT_ADDRESS,
  getDonationTokenAddress,
} from "@/constants/contract-address";
import { ChainId, DONATION_TOKENS } from "@/constants/config/chainId";
import { Address, erc20Abi, formatUnits, parseEther } from "viem";
import { useTokenAllowance } from "@/hooks/wagmi/approvals/useTokenAllowance";
import { useSearchParams } from "next/navigation";
import Web3Donation from "./web3-donation-panel";
import ManualDonation from "./manual-donation";
import { allowanceState, trxType } from "../utils";

const HeroSponsorPage = () => {
  const [copyAddress, setCopyAddress] = useState<boolean>(false);
  const [addName, setAddName] = useState<boolean>(false);
  const [donationTokenApproval, setDonationTokenApproval] =
    useState<allowanceState>(allowanceState.UNKNOWN);
  const [amount, setAmount] = useState("");
  const [trxtype, setTrxtype] = useState<trxType>(trxType.UNKNOWN);
  const searchParams = useSearchParams();
  const {
    data: hash,
    isPending,
    isSuccess,
    isError: mainIsError,
    writeContract,
  } = useWriteContract();
  let toast = useToast();
  const { address, chainId } = useAccount();
  const _donationToken = getDonationTokenAddress(searchParams);

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

  //DONATION AMOUNT APPROVAL CHECK AND FUNCTION

  const { data: PtokenAllowance, refetch: refetchAllowance } =
    useTokenAllowance({
      chainId,
      token: _donationToken as Address,
      owner: address,
      spender: DONATION_CONTRACT_ADDRESS[chainId as ChainId] as Address,
    });

  //RECOMPUTE ALLOWANCE STATE AFTER SUCCESSFUL APPROVAL

  const recomputeAllowanceState = () => {
    Number(formatUnits(PtokenAllowance ?? 0n, 18)) >= Number(amount) &&
      setDonationTokenApproval(allowanceState.APPROVED);
  };

  //TRANSACTIONS RECEIPT

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    isError: trxErrors,
  } = useWaitForTransactionReceipt({
    hash,
  });

  ///***FN to handle the Checkbox of Copy Address
  const handleCopyAddress = () => {
    setCopyAddress((prevCopyAddress) => !prevCopyAddress);
    if (addName) setAddName(false);
  };

  //***FN to handle the Checkbox of AddName
  const handleAddName = () => {
    setAddName((prevAddName) => !prevAddName);
    if (copyAddress) setCopyAddress(false);
  };

  //***FN to handle copy button click
  const handleCopyButtonClick = () => {
    if (!ETHABJ_WALLET_ADDRESS) {
      CustomErrorToast(
        toast,
        "Warning || address was unable to copy",
        4000,
        "bottom-left",
      );
    } else {
      clipboardCopy(ETHABJ_WALLET_ADDRESS).then(() => {
        CustomToast(
          toast,
          "You just copied ETHAbuja Wallet Address!",
          5000,
          "bottom",
        );
      });
    }
  };

  useEffect(() => {
    refectBalance();
    trxtype == trxType.APPROVAL && isConfirmed && refetchAllowance();
    recomputeAllowanceState();
  }, [chainId]);

  const donationReady: boolean =
    donationTokenApproval == allowanceState.APPROVED ||
    donationTokenApproval == allowanceState.UNKNOWN;

  return (
    <Box
      py={["7rem", "7rem", "5rem", "5rem"]}
      bgImage="url('image/donation-hero-page.png')"
      bgSize={"cover"}
      bgPos={["0 -90px", "inherit", "inherit"]}
    >
      <Flex flexDir={"column"} gap={"10rem"}>
        <Flex
          flexDir={"column"}
          maxW={"700px"}
          mx={"auto"}
          alignItems={"center"}
          gap={"12px"}
          px={".5rem"}
        >
          <Text
            color={"#060606"}
            textAlign="center"
            fontWeight={"600"}
            fontSize={["32px", "32px", "64px", "64px"]}
            lineHeight={["38.4px", "38.4px", "76.8px", "76.8px"]}
          >
            Sponsor ETHAbuja
          </Text>
          <Text
            textAlign="center"
            fontWeight={"500"}
            fontSize={"14px"}
            lineHeight={"23.1px"}
          >
            The people behind ETHAbuja are passionate individual building
            solutions for the growth of their communities. You can show your
            support by contributing to our collective.
          </Text>
        </Flex>

        <Box>
          <Flex justifyContent={"center"} px={["1rem", "1rem", "1rem", "0"]}>
            <Box
              w={["100%", "100%", "100%", "776px"]}
              h={"auto"}
              borderRadius={"16px"}
              border={"1px solid #D6D1F0"}
              bg={"#FFF"}
            >
              <Box
                py={"24px"}
                pl={["1rem", "48px", "48px"]}
                pr={["1rem,", "0", "0"]}
              >
                {/* begining of the box */}
                {/* top image and box heading */}
                <Flex
                  w={["100%", "313px", "313px"]}
                  flexDir={["column", "row", "row"]}
                  alignItems={"center"}
                  gap={"16px"}
                >
                  <Image
                    src="image/Heart compartment.png"
                    w={"64px"}
                    h={"64px"}
                    alt="an image"
                  />
                  <Text
                    color={"#060606"}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    lineHeight={"22.5px"}
                    letterSpacing={"0.18px"}
                    textAlign={["center", "left", "left"]}
                  >
                    Sponsor the ETHAbuja Maintainers
                  </Text>
                </Flex>
              </Box>
              <Divider />
              <Box px={["24px", "24px", "24px", "48px"]} py={"24px"}>
                <Box mb={"2rem"}>
                  <Flex flexDir={["column", "row", "row"]} gap={"16px"}>
                    <Flex
                      display={"inline-flex"}
                      gap={"4px"}
                      alignItems={"center"}
                    >
                      <Checkbox
                        isChecked={copyAddress}
                        onChange={handleCopyAddress}
                        _checked={{
                          "& .chakra-checkbox__control": {
                            background: "#8140CE",
                            borderColor: "#8140CE",
                            borderRadius: "50px",
                          },
                        }}
                      >
                        <Text
                          color={"#1D2E32"}
                          fontSize={"14px"}
                          fontWeight={"500"}
                        >
                          Copy address Instead
                        </Text>
                      </Checkbox>
                      <Tooltip
                        label="If you feel uncomfortable connecting your wallet, you can always just copy the address and send from your metamask instead"
                        placement="top"
                        border="0.4px solid #8140CE"
                        color="black"
                        fontSize={"12px"}
                        borderRadius={"8px"}
                        textAlign={"center"}
                        p={".5rem"}
                        bgColor="white"
                      >
                        {ETHABJ_SVG().questionMark()}
                      </Tooltip>
                    </Flex>

                    <Flex
                      display={"inline-flex"}
                      gap={"4px"}
                      alignItems={"center"}
                    >
                      <Checkbox
                        isChecked={addName}
                        onChange={handleAddName}
                        _checked={{
                          "& .chakra-checkbox__control": {
                            background: "#8140CE",
                            borderColor: "#8140CE",
                            borderRadius: "50px",
                          },
                        }}
                      >
                        <Text
                          color={"#1D2E32"}
                          fontSize={"14px"}
                          fontWeight={"500"}
                        >
                          Add name as sponsor
                        </Text>
                      </Checkbox>
                      <Tooltip
                        label="Get your name on the wall of sponsors below, nothing big, just a fun way to say thank you"
                        placement="top"
                        border="0.4px solid #8140CE"
                        color="black"
                        fontSize={"12px"}
                        borderRadius={"8px"}
                        textAlign={"center"}
                        p={".5rem"}
                        bgColor="white"
                      >
                        {ETHABJ_SVG().questionMark()}
                      </Tooltip>
                    </Flex>
                  </Flex>
                </Box>

                {copyAddress ? (
                  <ManualDonation />
                ) : (
                  <Box>
                    <Web3Donation
                      addName={addName}
                      _donationToken={_donationToken as Address}
                      amount={amount}
                      setAmount={setAmount}
                      trxtype={trxtype}
                      setTrxtype={setTrxtype}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default HeroSponsorPage;

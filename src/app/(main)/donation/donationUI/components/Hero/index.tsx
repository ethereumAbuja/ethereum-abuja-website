"use client";

import React, { useState } from "react";
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
import { useAccount } from "wagmi";
import { ETHABJ_WALLET_ADDRESS } from "@/utils/config";
import { switchChain } from "@wagmi/core";
import {
  mainnet,
  sepolia,
  base,
  baseSepolia,
  arbitrum,
  arbitrumSepolia,
  polygon,
  bsc,
  polygonMumbai,
  optimismSepolia,
  optimism,
} from "wagmi/chains";
import { config } from "@/constants/config";
import { chains } from "../chainData";

const HeroSponsorPage = () => {
  const [copyAddress, setCopyAddress] = useState<boolean>(false);
  const [addName, setAddName] = useState<boolean>(false);
  const [selectedChain, setSelectedChain] = useState<string>("ethereum");

  let toast = useToast();
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();

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
        "bottom-left"
      );
    } else {
      clipboardCopy(ETHABJ_WALLET_ADDRESS).then(() => {
        CustomToast(
          toast,
          "You just copied ETHAbuja Wallet Address!",
          5000,
          "bottom"
        );
      });
    }
  };

  //***FN to handling Connect wallet and also contribute button
  function handleConnectAndContribute() {
    if (isConnected) {
      // Handle contribution logic when wallet is connected
    } else {
      open();
    }
  }

  //***Function to get chain ID based on selected chain value
  const getChainId = (selectedChainValue: any) => {
    switch (selectedChainValue) {
      case "ethereum":
        return mainnet.id;
      case "arbitrum":
        return arbitrum.id;
      case "optimism":
        return optimism.id;
      case "base":
        return base.id;
      case "bsc":
        return bsc.id;
      case "sepolia":
        return sepolia.id;
      default:
        return mainnet.id;
    }
  };

  //***FN to handle the select chain change
  const handleSelectChainChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedChainValue = e.target.value;
    setSelectedChain(selectedChainValue);

    if (!isConnected) {
      // Notify user to connect wallet before switching the chain
      CustomErrorToast(
        toast,
        "Please connect wallet before switching the chain..",
        4000,
        "bottom-left"
      );
      return;
    }

    try {
      // Switch the chain if the wallet is connected
      await switchChain(config, {
        chainId: getChainId(selectedChainValue),
      });

      CustomToast(
        toast,
        `Switched to ${selectedChainValue} chain.`,
        3000,
        "bottom"
      );
    } catch (error) {
      console.error("Error switching chain:", error);
      CustomErrorToast(
        toast,
        "Failed to switch the chain. Please try again.",
        4000,
        "bottom-left"
      );
    }
  };

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
                  <Box>
                    <Text
                      color={"#3A3A3A"}
                      fontSize={"14px"}
                      fontWeight={"500"}
                      mb={"5px"}
                    >
                      Copy Wallet Address
                    </Text>
                    <Flex
                      border={"1px solid #E2E8F0"}
                      p={"5px"}
                      borderRadius={"md"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Input
                        fontSize={"16px"}
                        fontWeight={"500"}
                        color={"#1D2E32"}
                        p={"0.5rem"}
                        _focus={{
                          boxShadow: "none",
                        }}
                        border={"none"}
                        value={ETHABJ_WALLET_ADDRESS}
                      />

                      <Button
                        h={"28px"}
                        p={"9px 12px"}
                        borderRadius={"176px"}
                        bg={"rgba(241, 242, 254, 0.70)"}
                        onClick={handleCopyButtonClick}
                      >
                        <Text
                          fontSize={"14px"}
                          fontWeight={"500"}
                          color={"#1D2E32"}
                        >
                          Copy
                        </Text>
                      </Button>
                    </Flex>
                  </Box>
                ) : (
                  <Box>
                    {addName ? (
                      <Box w={["100%", "49%", "49%"]} mb={"1rem"}>
                        <Text
                          color={"#3A3A3A"}
                          fontSize={"14px"}
                          fontWeight={"500"}
                          mb={"5px"}
                        >
                          Name (or pseudonym)
                        </Text>
                        <Box
                          border={"1px solid #E2E8F0"}
                          p={"5px"}
                          borderRadius={"md"}
                        >
                          <Input
                            p={"0"}
                            _focus={{
                              boxShadow: "none",
                            }}
                            border={"none"}
                            type="text"
                          />
                        </Box>
                      </Box>
                    ) : (
                      ""
                    )}

                    <Flex
                      flexDir={["column", "row", "row"]}
                      gap={"16px"}
                      mb={"24px"}
                    >
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
                          />
                          <Box>
                            <select
                              style={{ fontSize: "14px" }}
                              className="css-so9kbn"
                            >
                              <option value="usdt">USDT</option>
                              <option value="usdc">USDC</option>
                            </select>
                          </Box>
                        </Flex>
                      </Box>

                      <Box w={"100%"}>
                        <Text
                          color={"#3A3A3A"}
                          fontSize={"14px"}
                          fontWeight={"500"}
                          mb={"5px"}
                        >
                          Select Chain
                        </Text>
                        <select
                          className="css-i3puav"
                          style={{
                            width: "100%",
                            height: "3.2rem",
                            borderRadius: ".3rem",
                            border: "1px solid #E2E8F0",
                            padding: "5px 10px",
                          }}
                          value={selectedChain}
                          onChange={handleSelectChainChange}
                        >
                          {chains.map((chain) => (
                            <option key={chain.value} value={chain.value}>
                              {chain.label}
                            </option>
                          ))}
                        </select>
                      </Box>
                    </Flex>

                    <Flex justifyContent={["center", "flex-end", "flex-end"]}>
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
                        onClick={handleConnectAndContribute}
                      >
                        <Text
                          color={"#FDFDFD"}
                          fontSize={"14px"}
                          fontWeight={"500"}
                          lineHeight={"23.1px"}
                        >
                          {isConnected ? "Contribute" : "Connect Wallet"}
                        </Text>
                      </Button>
                    </Flex>
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

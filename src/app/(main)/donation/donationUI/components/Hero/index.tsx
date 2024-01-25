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
  Select,
  Button,
} from "@chakra-ui/react";
import { ETHABJ_SVG } from "@/assets/svg";
import "../../../../../globals.css";

const HeroSponsorPage = () => {
  const [copyAddress, setCopyAddress] = useState<boolean>(false);
  const [addName, setAddName] = useState<boolean>(false);

  const handleCopyAddress = () => {
    if (copyAddress === false) {
      setCopyAddress(true);
    } else {
      setCopyAddress(false);
    }

    if (addName === true) {
      // setCopyAddress(true);
      setAddName(false);
    }
  };

  const handleAddName = () => {
    if (addName === false) {
      setAddName(true);
    } else {
      setAddName(false);
    }

    if (copyAddress === true) {
      // setAddName(true);
      setCopyAddress(false);
    }
  };

  return (
    <Box py={["7rem", "7rem", "5rem", "5rem"]}>
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
                      <Checkbox onChange={handleCopyAddress}>
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
                        fontSize={"12px"}
                        borderRadius={"8px"}
                        textAlign={"center"}
                        p={".5rem"}
                      >
                        {ETHABJ_SVG().questionMark()}
                      </Tooltip>
                    </Flex>

                    <Flex
                      display={"inline-flex"}
                      gap={"4px"}
                      alignItems={"center"}
                    >
                      <Checkbox onChange={handleAddName}>
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
                        fontSize={"12px"}
                        borderRadius={"8px"}
                        textAlign={"center"}
                        p={".5rem"}
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
                        value={["0x7a0a3654bab7bB5d7830C1D96738208a213cbdb6"]}
                      />

                      <Button
                        h={"28px"}
                        p={"9px 12px"}
                        borderRadius={"176px"}
                        bg={"rgba(241, 242, 254, 0.70)"}
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
                        >
                          <option value="ethereum">Ethereum</option>
                          <option value="arbitrum">Arbitrum</option>
                          <option value="optimism">Optimism</option>
                          <option value="celo-blockchain">
                            Celo Blockchain
                          </option>
                          <option value="base">Base</option>
                          <option value="bsc">Binance Smart Chain</option>
                          <option value="polygon-matic">Polygon Matic</option>
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
                      >
                        <Text
                          color={"#FDFDFD"}
                          fontSize={"14px"}
                          fontWeight={"500"}
                          lineHeight={"23.1px"}
                        >
                          Connect Wallet
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

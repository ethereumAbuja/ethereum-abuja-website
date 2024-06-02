"use client";
import { ChainId } from "@/constants/config/chainId";
import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Image,
  Text,
  Tooltip,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
export default async function Facuet() {
  return (
    <Box py={"5%"}>
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
              Donation Faucet
            </Text>
            <Text
              textAlign="center"
              fontWeight={"500"}
              fontSize={"14px"}
              lineHeight={"23.1px"}
            >
              Claim test tokens to test eth abuja Donation app, share your
              feedback to help devs iterate and make overall experience more
              pleasant.
              <br />
              50USDT and 5USDC on sepolia and base sepolia will be send to your
              wallet address. ensure you exhauste all before requesting.
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
                      Claim Faucet
                    </Text>
                  </Flex>
                </Box>
                <Divider />
                <Box px={["24px", "24px", "24px", "48px"]} py={"24px"}>
                  <Box mb={"2rem"}>
                    <Tabs
                      align="center"
                      borderRadius={"16px"}
                      border={"1px solid #D6D1F0"}
                      variant="enclosed"
                      padding="8px"
                    >
                      <TabList>
                        <Tab>Sepolia</Tab>
                        <Tab>Base Sepolia</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <FaucetForm />
                        </TabPanel>
                        <TabPanel>
                          <FaucetForm />
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

const FaucetForm = () => {

    const [faucetChain, setFaucetChain] = useState<ChainId>()
  return (
    <VStack alignItems="flex-start" gap="8px">
      <Input
        border={"1px solid #E2E8F0"}
        placeholder="Enter Your Wallet Address (0x...)"
        type="number"
        _focus={{
          boxShadow: "none",
        }}
        // value={amount}
        // onChange={handleDonationAmount}
      />
      <Button width="100%">Send me Test Tokens</Button>
    </VStack>
  );
};

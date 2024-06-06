"use client";

import {
  Box,
  Divider,
  Flex,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAccount, useSwitchChain } from "wagmi";
import { ChainId } from "@/constants/config/chainId";
import FaucetForm from "./components/Faucetform";

export default async function Facuet() {
  const [faucetChainId, setFaucetChainId] = useState<ChainId>(
    ChainId.BASE_SEPOLIA
  );

  const [tabIndex, setTabIndex] = useState<Number>(0);
  const { chainId } = useAccount();
  const { chains, switchChain } = useSwitchChain();

  useEffect(() => {
    // console.log("this is tab index", tabIndex);
  }, [tabIndex]);

  return (
    <Box py={"5%"}>
      <Box
        py={["7rem", "7rem", "5rem", "5rem"]}
        bgImage="url('image/donation-hero-page.png')"
        bgSize={"cover"}
        bgPos={["0 -90px", "inherit", "inherit"]}
      >
        <Flex flexDir={"column"} gap={"5rem"}>
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
              Claim test tokens to test ETHAbuja Donation dApp, share your
              feedback to help devs iterate and make overall experience more
              pleasant.
              <br />
              50 USDT and 50 USDC on sepolia and base sepolia will be send to
              your wallet address. ensure you exhauste all before requesting.
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
                      onChange={(index) => setTabIndex(index)}
                      align="center"
                      borderRadius={"16px"}
                      border={"1px solid #D6D1F0"}
                      variant="enclosed"
                      isFitted
                      padding="8px"
                    >
                      <TabList>
                        {chains.map((chain) => (
                          <Tab
                            key={chain.id}
                            onClick={() => {
                              switchChain({ chainId: chain.id });
                            }}
                          >
                            {chain.name}
                          </Tab>
                        ))}
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <FaucetForm chainId={faucetChainId as ChainId} />
                        </TabPanel>
                        <TabPanel>
                          <FaucetForm chainId={faucetChainId as ChainId} />
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

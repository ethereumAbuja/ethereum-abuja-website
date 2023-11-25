import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const SectionTwo = () => {
  return (
    <Box>
      <Box bg={"black"} py={"7rem"}>
        <Box maxW={"1100px"} mx={"auto"} px={"1rem"}>
          <Flex alignItems={"center"}>
            <Box>
              <Flex flexDir={"column"} gap={"42px"} alignItems={"flex-start"}>
                <Flex flexDir={"column"} gap={"32px"} alignItems={"flex-start"}>
                  <Heading
                    color={"#FCFCFC"}
                    fontSize={"64px"}
                    fontWeight={"600"}
                    lineHeight={"76.8px"}
                  >
                    Building the Future, Together
                  </Heading>
                  <Text
                    color={"#EAEAEA"}
                    fontSize={"18px"}
                    fontWeight={"500"}
                    lineHeight={"29.7px"}
                  >
                    We are a passionate community of builders, developers, and
                    innovators dedicated to propelling the advancements of
                    Ethereum and Layer 2 blockchains in Abuja and Northern
                    Nigeria. Our mission is to bring together minds that are
                    eager to shape the future of decentralized technology, right
                    here in our vibrant region.
                  </Text>
                </Flex>
                <Box>
                  <Link
                    href="#"
                    display={"flex"}
                    w={"160px"}
                    py={"14px"}
                    px={"0"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"10px"}
                    borderRadius={"8px"}
                    border={"1px solid #000"}
                    bgGradient={
                      "linear(90deg, #4662AA 0%, rgba(154, 57, 229, 0.90) 102.94%)"
                    }
                  >
                    <Text
                      color={"#FDFDFF"}
                      fontSize={"16px"}
                      fontWeight={"500"}
                      lineHeight={"26.4px"}
                    >
                      Join Community
                    </Text>
                  </Link>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Image
                w={"100%"}
                src="/image/Section 2 ETH with screen asset.png"
                alt="image"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Image
        src="/image/Section 2.5 - community initiative stripe.png"
        alt="image"
      />
    </Box>
  );
};

export default SectionTwo;

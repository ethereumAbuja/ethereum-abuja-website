import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const SectionFive = () => {
  return (
    <Box py={"45px"}>
      <Box maxW={"1100px"} mx={"auto"} px={"1rem"}>
        <Flex
          flexDir={"column"}
          alignItems={"flex-start"}
          gap={"8px"}
          mb={"32px"}
        >
          <Text
            color={"#1D2E32"}
            fontSize={"20px"}
            fontWeight={"600"}
            lineHeight={"24px"}
          >
            Partners
          </Text>
          <Text
            color={"#060606"}
            fontSize={"40px"}
            fontWeight={"600"}
            lineHeight={"64px"}
          >
            Our Ecosystem Partners
          </Text>
        </Flex>
        <Flex alignItems={"flex-start"} gap={"24px"} justifyContent={"center"}>
          <Flex
            w={"298px"}
            flexDir={"column"}
            alignItems={"center"}
            gap={"32px"}
            pt={"64px"}
            pb={"71px"}
            pr={"66px"}
            pl={"67px"}
            borderRadius={"8px"}
            border={"1.5px solid #C6C6C6"}
          >
            <Image src="/image/web3bridge.png" alt="image" />
            <Text
              color={"#1D2E32"}
              fontSize={"16px"}
              fontWeight={"600"}
              lineHeight={"19.2px"}
            >
              Web3bridge
            </Text>
          </Flex>
          <Flex
            w={"298px"}
            flexDir={"column"}
            alignItems={"center"}
            gap={"32px"}
            pt={"64px"}
            pb={"71px"}
            pr={"50px"}
            pl={"50px"}
            borderRadius={"8px"}
            border={"1.5px solid #C6C6C6"}
          >
            <Image src="/image/Ethereumfoundation.png" h={"57px"} alt="image" />
            <Text
              color={"#1D2E32"}
              fontSize={"16px"}
              fontWeight={"600"}
              lineHeight={"19.2px"}
            >
              Ethereum Foundation
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default SectionFive;

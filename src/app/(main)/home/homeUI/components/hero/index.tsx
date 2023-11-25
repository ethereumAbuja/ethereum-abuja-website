import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const Hero = () => {
  return (
    <Box h={"100vh"} pos={"relative"} zIndex={"10"} pt={"5rem"} mb={"10rem"}>
      <Image
        top={"0"}
        left={"0"}
        pos={"absolute"}
        zIndex={"-10"}
        src="/image/Header_Image.png"
        alt="image"
        objectFit={"cover"}
        w={"100%"}
      />

      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        textAlign={"center"}
        gap={"1rem"}
        pt={"10rem"}
      >
        <Heading
          color={"#060606"}
          fontSize={"64px"}
          fontWeight={"600"}
          lineHeight={"76.8px"}
        >
          Welcome to web3abuja.eth
        </Heading>
        <Text
          color={"#1D2E32"}
          fontSize={"18px"}
          fontWeight={"500"}
          lineHeight={"29.7px"}
          w={"50%"}
        >
          Building a future where traditional ingenuity meets decentralized
          digital innovation
        </Text>
        <Box display={"flex"} justifyContent={"center"}>
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
            bg={"black"}
          >
            <Text
              bgImg={"url('./image/Rectangle 1.png')"}
              color={"#FCFCFC"}
              fontSize={"16px"}
              fontWeight={"500"}
              lineHeight={"26.4px"}
            >
              Join Community
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

import React from "react";
import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { COLORS } from "@/constants/theme/lightDarkTheme";
import { ETHABJ_SVG2 } from "@/assets/svg/svgFile2";

const Hero = () => {
  return (
    <Box
      h={"100vh"}
      justifyContent="center"
      alignItems="center"
      pos={"relative"}
      zIndex={"10"}
      px={["3rem", "", "0px"]}
      py={["3rem", "", "0px"]}
      pt={["100px", "100px", "0px", "0px"]}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        textAlign={"center"}
        position="relative"
      >
        <Text
          color={"#060606"}
          fontSize={["30px", "40px", "", "64px"]}
          fontWeight={600}
          lineHeight="120%"
        >
          Welcome to web3abuja.eth
        </Text>
        <Text
          color={"#1D2E32"}
          fontSize={["12px", "14px", "16px"]}
          fontWeight={500}
          lineHeight="165%"
          mt="8px"
          maxW={["", "", "550px"]}
        >
          Building a future where traditional ingenuity meets decentralized
          digital innovation
        </Text>

        <Button
          mt="24px"
          as="a"
          href="https://chat.whatsapp.com/FcsSrUumLY0IdBUcsXqcQi"
          target="_blank"
          bg="black"
          w={["160px", "", "160px"]}
          h="50px"
          p="20px"
          border="0.5px solid #000"
          borderRadius={"8px"}
          color="white"
          fontWeight={400}
          _hover={{
            bg: COLORS.joinComColorBTN,
            borderColor: "1px solid black",
          }}
        >
          Join Community
        </Button>

        <ScrollLink to="scroll-target" smooth={true} duration={1000}>
          <Box as="button" mt="100px">
            {ETHABJ_SVG2().scrollAnimationIcon()}
          </Box>
        </ScrollLink>
      </Box>
      <Image
        top={"-200px"}
        left={"0"}
        pos={"absolute"}
        zIndex={"-10"}
        src="/image/Header_Image.png"
        alt="image"
        objectFit={"cover"}
        w={"100%"}
      />
    </Box>
  );
};

export default Hero;

import React from "react";
import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { COLORS } from "@/constants/theme/lightDarkTheme";
import { ETHABJ_SVG2 } from "@/assets/svg/svgFile2";

const Hero = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      px={["3rem", "", "0px"]}
      py={["3rem", "", "0px"]}
      pt={["100px", "100px", "0px", "0px"]}
      bgImage={[
        "/image/Mobile LP hero asset 1.png",
        "/image/Header_Image.png",
        "/image/Header_Image.png",
      ]}
      bgSize={"cover"}
      bgPos={["0 -90px", "inherit", "inherit"]}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        textAlign={"center"}
        position="relative"
        pt={["50%", "19%", "19%"]}
      >
        <Text
          color={"#060606"}
          fontSize={["40px", "40px", "", "64px"]}
          fontWeight={600}
          lineHeight="48px"
        >
          Welcome to web3abuja.eth
        </Text>
        <Text
          color={"#1D2E32"}
          fontSize={["14px", "14px", "16px"]}
          fontWeight={500}
          lineHeight="23.1px"
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
          <Box as="button" mt="190px">
            {ETHABJ_SVG2().scrollAnimationIcon()}
          </Box>
        </ScrollLink>
      </Box>
    </Box>
  );
};

export default Hero;

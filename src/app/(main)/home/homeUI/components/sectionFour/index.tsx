import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ETHABJ_SVG } from "@/assets/svg";

const SectionFour = () => {
  const builders = [
    {
      title: "Individuals",
      desc: "Connect with fellow enthusiasts, share knowledge, and collaborate on groundbreaking projects.",
    },
    {
      title: "Partners",
      desc: "Join us as a partner to foster innovation and provide resources that enable growth and development for resilient builders in the Ethereum Ecosystem.",
    },
    {
      title: "Protocols",
      desc: "Work with us to explore and integrate new blockchain protocols that can redefine the landscape of decentralized technology.",
    },
  ];
  return (
    <Box py={"137.5px"}>
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
            Join us
          </Text>
          <Text
            color={"#060606"}
            fontSize={"40px"}
            fontWeight={"600"}
            lineHeight={"64px"}
          >
            Become a Builder
          </Text>
        </Flex>
        <Flex gap={"24px"} alignItems={"flex-start"} h={"100%"}>
          {builders.map((builder, index) => (
            <Flex
              key={index}
              w={"100%"}
              h={"100%"}
              pt={"30px"}
              flexDir={"column"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={"98px"}
              borderRadius={"8px"}
              border={"1.5px solid black"}
            >
              <Flex
                flexDir={"column"}
                alignItems={"flex-start"}
                gap={"20px"}
                px={"20px"}
              >
                <Text
                  color={"#060606"}
                  fontSize={"24px"}
                  fontWeight={"600"}
                  lineHeight={"28.8px"}
                >
                  {builder.title}
                </Text>
                <Text
                  color={"#3A3A3A"}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  lineHeight={"29.7px"}
                >
                  {builder.desc}
                </Text>
              </Flex>
              <Link
                href="#"
                display={"flex"}
                h={"56px"}
                w={"100%"}
                py={"15px"}
                px={"20px"}
                justifyContent={"space-between"}
                alignItems={"center"}
                bg={"#F6E6C7"}
                borderBottomRadius={"8px"}
              >
                <Text
                  color={"#060606"}
                  fontSize={"16px"}
                  fontWeight={"600"}
                  lineHeight={"26.4px"}
                >
                  Join Community
                </Text>
                <Box>{ETHABJ_SVG().rightArrow()}</Box>
              </Link>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default SectionFour;

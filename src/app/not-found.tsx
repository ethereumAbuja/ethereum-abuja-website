"use client";

import { Flex, Text, Center, Link, Box, Stack, HStack } from "@chakra-ui/react";
import Image from "next/image";
// import Lottie from "lottie-react";
// import pageNotFoundAnimation from "@/assets/json/animation_lmy76t1l.json";
import pageNotFound from "../../public/image/404page/404-Page-asset.png";
import { ETHABJ_SVG } from "@/assets/svg";

export const NotFound = () => {
  const { root, home } = useStyles();

  return (
    <Flex {...root} position="relative">
      <Image
        src={pageNotFound}
        alt="404-page image"
        fill
        style={{ objectFit: "contain" }}
      />

      <Flex
        position="absolute"
        mt={{ base: "80px", md: "200px" }}
        flexDir="column"
        textAlign="center"
        justify="center"
        alignItems="center"
        pt={{ base: "100px", md: "120px" }}
      >
        <Text fontSize="18px" fontWeight={500}>
          Opps........ Something went wrong
        </Text>

        <Text fontWeight={500} fontSize="14px" mt="8px">
          What you are looking for does not currently exist or may have been
          moved
        </Text>

        <Link
          as={Link}
          bg="black"
          w="160px"
          borderRadius={"8px"}
          color="white"
          cursor="pointer"
          p="14px 0"
          mt={{ base: "20px", md: "30px" }}
          border="1px solid #000"
          textTransform={"uppercase"}
          href="/"
        >
          Take me home
        </Link>

        <Flex
          flexDir="column"
          alignItems="center"
          pt={{ base: "60px", md: "100px" }}
        >
          <HStack spacing={{ base: "8px", md: "12px" }}>
            <Box as="a" href={"/about"}>
              About Us
            </Box>
            <Box as="a" href={"/community"}>
              Community
            </Box>
            <Box as="a" href={"/events"}>
              Events
            </Box>
            <Box as="a" href={"/guides"}>
              Resources
            </Box>
          </HStack>

          <HStack
            mt={{ base: "16px", md: "24px" }}
            spacing={["20px", "20px", "0", "0"]}
          >
            <Box
              as="a"
              href={"https://twitter.com/EthAbuja_"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ETHABJ_SVG().twitterIcon()}
            </Box>
            <Box
              as="a"
              href={"https://medium.com/@ethabuja"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ETHABJ_SVG().mediumIcon()}
            </Box>
            <Box
              as="a"
              href={"https://github.com/ethAbuja"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ETHABJ_SVG().githubIcon()}
            </Box>
            <Box as="a" href={"/#"} target="_blank" rel="noopener noreferrer">
              {ETHABJ_SVG().discordIcon()}
            </Box>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NotFound;

const useStyles = () => {
  return {
    root: {
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    },
    home: {
      color: "red",
      fontSize: 40,
      paddingInline: 30,
    },
  };
};

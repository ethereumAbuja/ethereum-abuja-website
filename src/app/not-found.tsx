"use client";

import { Flex, Text, Center, Link } from "@chakra-ui/react";
import Lottie from "lottie-react";
import pageNotFoundAnimation from "@/assets/json/animation_lmy76t1l.json";

export const NotFound = () => {
  const { root, home } = useStyles();

  return (
    <Flex style={root} flexDir="column">
      <Lottie animationData={pageNotFoundAnimation} style={{ height: 400 }} />
      <Center
        as={Link}
        bg="black"
        borderRadius={"50px"}
        color="white"
        cursor="pointer"
        p="20px"
        mt={"20px"}
        textTransform={"uppercase"}
        href="/"
      >
        Go Back Home
      </Center>
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

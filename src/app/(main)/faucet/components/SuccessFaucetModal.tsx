"use client";

import React from "react";
import { Stack, Flex, Box, Image, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import ModalComponent from "@/components/ModalComponent";

const SuccessFaucetModal = ({
  onOpen,
  isOpen,
  onClose,
}: {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <ModalComponent
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Stack w="100%">
        <Flex justify="center" alignItems="center" flexDir="column">
          <Image
            src="image/transaction-successful.png"
            w={"122px"}
            alt="an image"
          />

          <Box w={"100%"} textAlign="center">
            <Text fontWeight={600} mt="10px" fontSize="18px">
              You just claimed Successful
            </Text>
            <Text as="span" fontSize="14px">
              You can now proceed to test the donation dApp
            </Text>

            <Button
              as={Link}
              href="/donation"
              mt="40px"
              w="100%"
              color="white"
              bgColor="black"
              _hover={{
                bgColor: "black",
              }}
            >
              Go to DAPP
            </Button>
          </Box>
        </Flex>
      </Stack>
    </ModalComponent>
  );
};

export default SuccessFaucetModal;

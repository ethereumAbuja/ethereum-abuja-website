import React, { useEffect } from "react";
import {
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import HeroSponsorPage from "./components/Hero";
import WallHeros from "./components/WallHeros";

const DonationDapp: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(() => {
  //   // Open the modal when the component mounts
  //   onOpen();
  // }, [onOpen]);

  return (
    <Box py={"5%"}>
      <HeroSponsorPage />
      <WallHeros />

      {/* <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Beta Testing</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              We are currently in beta testing. Before proceeding, claim your
              faucet for testing purposes.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Box>
  );
};

export default DonationDapp;

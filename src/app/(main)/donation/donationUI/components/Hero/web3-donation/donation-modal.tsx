import { useSearchParams } from "next/navigation";
import SyncLoader from "react-spinners/ClipLoader";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Address } from "viem";

type modalProps = {
  isOpen: boolean;
  onClose: () => void;

  donationAmount: string;
  donatefn: () => void;
  approvefn: () => void;

  //trx states

  isSubmitted: boolean;
  isPending: boolean;
  isErred: boolean;

  isDonationReady: boolean;

  hash: Address | undefined;
};
export const TransactionModal = ({
  isOpen,
  onClose,

  donatefn,
  approvefn,

  donationAmount,

  isSubmitted,
  isPending,
  isErred,

  isDonationReady,

  hash,
}: modalProps) => {
  const searchParams = useSearchParams();
  const [userConfirmation, setUserConfirmation] = useState<boolean>(false);
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Review Transactions</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box w={"100%"}>
            {isSubmitted ? (
              <Flex alignItems={"center"} flexDir={"column"} gap={"1.5rem"}>
                <IoCheckmarkCircleSharp size={100} color="#00FF00" />
                <Text>Donation Successful. God Bless!</Text>
              </Flex>
            ) : (
              <>
                {userConfirmation && isPending ? (
                  <Flex flexDir={"column"} alignItems={"center"} gap={"1.5rem"}>
                    <SyncLoader color="#36d7b7" size={45} />
                    <Text>Confirm Donation</Text>
                    <Text>Proceed in Wallet</Text>
                  </Flex>
                ) : (
                  <Flex flexDir={"column"} alignItems={"center"} gap={"2rem"}>
                    <Text>You are about to DONATE</Text>
                    <Text>
                      {donationAmount} {searchParams.get("donationtoken")}
                    </Text>
                    <Text> to ETHABUJA MAINTENERS</Text>
                  </Flex>
                )}
              </>
            )}
          </Box>

          {/* <Button>
              {isPending && "TRANSACTION PENDING"}
              {isSubmitted && "TRANSACTION SUCCESFULL"}
              {isErred && "TRANSACTION ERROR"}
              {hash && hash}
            </Button> */}
        </ModalBody>

        {!isPending && !userConfirmation && (
          <ModalFooter>
            <Button
              bg={"green.500"}
              textColor={"white"}
              w={"100%"}
              onClick={() => {
                setUserConfirmation(true);
                donatefn();
              }}
            >
              Confirm Donation{" "}
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

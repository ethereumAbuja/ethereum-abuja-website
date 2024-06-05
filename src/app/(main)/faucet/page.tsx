"use client";
import { ChainId } from "@/constants/config/chainId";
import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Image,
  Text,
  Tooltip,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import abi from "@/constants/abi/faucetAbi.json";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
  useSwitchChain,
} from "wagmi";
import { baseSepoliaFaucet, sepoliaFaucet } from "@/constants/contract-address";
import { Address, isAddress } from "viem";
import { useDebounce } from "@/hooks/useDebounce";
import { readContract } from "@wagmi/core";
import { getUserEligibility, dripFaucet } from "@/utils/helpers/faucet";
import ConnectButton from "@/components/wagmi/connectButton";
import ClipLoader from "react-spinners/ClipLoader";
export default async function Facuet() {
  const [faucetChainId, setFaucetChainId] = useState<ChainId>(
    ChainId.BASE_SEPOLIA,
  );

  const [tabIndex, setTabIndex] = useState(0);
  const { chainId } = useAccount();
  const { chains, switchChain } = useSwitchChain();
  useEffect(() => {
    console.log("this is tab index", tabIndex);
  }, [tabIndex]);
  return (
    <Box py={"5%"}>
      <Box
        py={["7rem", "7rem", "5rem", "5rem"]}
        bgImage="url('image/donation-hero-page.png')"
        bgSize={"cover"}
        bgPos={["0 -90px", "inherit", "inherit"]}
      >
        <Flex flexDir={"column"} gap={"10rem"}>
          <Flex
            flexDir={"column"}
            maxW={"700px"}
            mx={"auto"}
            alignItems={"center"}
            gap={"12px"}
            px={".5rem"}
          >
            <Text
              color={"#060606"}
              textAlign="center"
              fontWeight={"600"}
              fontSize={["32px", "32px", "64px", "64px"]}
              lineHeight={["38.4px", "38.4px", "76.8px", "76.8px"]}
            >
              Donation Faucet
            </Text>
            <Text
              textAlign="center"
              fontWeight={"500"}
              fontSize={"14px"}
              lineHeight={"23.1px"}
            >
              Claim test tokens to test eth abuja Donation app, share your
              feedback to help devs iterate and make overall experience more
              pleasant.
              <br />
              50USDT and 5USDC on sepolia and base sepolia will be send to your
              wallet address. ensure you exhauste all before requesting.
            </Text>
          </Flex>

          <Box>
            <Flex justifyContent={"center"} px={["1rem", "1rem", "1rem", "0"]}>
              <Box
                w={["100%", "100%", "100%", "776px"]}
                h={"auto"}
                borderRadius={"16px"}
                border={"1px solid #D6D1F0"}
                bg={"#FFF"}
              >
                <Box
                  py={"24px"}
                  pl={["1rem", "48px", "48px"]}
                  pr={["1rem,", "0", "0"]}
                >
                  <Flex
                    w={["100%", "313px", "313px"]}
                    flexDir={["column", "row", "row"]}
                    alignItems={"center"}
                    gap={"16px"}
                  >
                    <Image
                      src="image/Heart compartment.png"
                      w={"64px"}
                      h={"64px"}
                      alt="an image"
                    />
                    <Text
                      color={"#060606"}
                      fontSize={"18px"}
                      fontWeight={"600"}
                      lineHeight={"22.5px"}
                      letterSpacing={"0.18px"}
                      textAlign={["center", "left", "left"]}
                    >
                      Claim Faucet
                    </Text>
                  </Flex>
                </Box>
                <Divider />
                <Box px={["24px", "24px", "24px", "48px"]} py={"24px"}>
                  <Box mb={"2rem"}>
                    <Tabs
                      onChange={(index) => setTabIndex(index)}
                      align="center"
                      borderRadius={"16px"}
                      border={"1px solid #D6D1F0"}
                      variant="enclosed"
                      isFitted
                      padding="8px"
                    >
                      <TabList>
                        {chains.map((chain) => (
                          <Tab
                            key={chain.id}
                            onClick={() => {
                              switchChain({ chainId: chain.id });
                            }}
                          >
                            {chain.name}
                          </Tab>
                        ))}
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <FaucetForm chainId={faucetChainId as ChainId} />
                        </TabPanel>
                        <TabPanel>
                          <FaucetForm chainId={faucetChainId as ChainId} />
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

enum addressEligibilityStatus {
  UNKNOWN,
  ELIGIBLE,
  NOTELIGIBLE,
  LOADING_STATUS,
}

const FaucetForm = ({ chainId }: { chainId: ChainId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, isConnected } = useAccount();
  const [faucetCollector, setFaucetCollector] = useState("");
  const [isAddressElligible, setAddressEligible] =
    useState<addressEligibilityStatus>();

  const actualAddressToQuery = useDebounce(faucetCollector, 200);

  const handleEligibilityCheck = async () => {
    setAddressEligible(addressEligibilityStatus.LOADING_STATUS);
    try {
      const isEligible = await getUserEligibility(faucetCollector, chainId);
      isEligible
        ? setAddressEligible(addressEligibilityStatus.ELIGIBLE)
        : setAddressEligible(addressEligibilityStatus.NOTELIGIBLE);
      console.log("Eligibility:", isEligible);
    } catch (error) {
      console.error("Error checking eligibility:", error);
      setAddressEligible(addressEligibilityStatus.UNKNOWN);
    }
  };
  useEffect(() => {
    handleEligibilityCheck();
  }, [actualAddressToQuery]);

  const handleAddressInput = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    //get input from handler
    const input = event.target.value;
    setFaucetCollector(input);
    if (isAddress(input)) {
      // setAddressEligible(addressEligibilityStatus.LOADING_STATUS);
      // await refetch();
      // data && console.log("this is data from read eligibility", data);
    } else {
      setAddressEligible(addressEligibilityStatus.NOTELIGIBLE);
    }
  };

  const {
    data: hash,
    isPending,
    isSuccess: isTrxSubmitted,
    isError: isWriteContractError,
    writeContract,
    error: WriteContractError,
    reset,
  } = useWriteContract();

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    isError: isWaitTrxError,
    error: WaitForTransactionReceiptError,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const dripit = () => {
    if (!chainId) return null;
    writeContract({
      address:
        chainId == ChainId.BASE_SEPOLIA ? baseSepoliaFaucet : sepoliaFaucet,
      abi,
      functionName: "dripTokens",
      args: [faucetCollector],
    });
  };

  const istransactionLoading = isPending || isConfirming;
  const cannotRequestTokens =
    isAddressElligible == addressEligibilityStatus.NOTELIGIBLE ||
    isAddressElligible == addressEligibilityStatus.LOADING_STATUS;
  return (
    <>
      {!isConnected ? (
        <ConnectButton />
      ) : (
        <VStack alignItems="flex-start" gap="8px">
          {isAddressElligible == addressEligibilityStatus.NOTELIGIBLE && (
            <Box backgroundColor="red" textColor="white" padding="8px">
              <Text>
                This wallet has enough test tokens for the app testing, try a
                diffrent one.
              </Text>
              <Button>Close</Button>
            </Box>
          )}
          <Input
            border={"1px solid #E2E8F0"}
            placeholder="Enter Your Wallet Address (0x...)"
            // type="number"
            _focus={{
              boxShadow: "none",
            }}
            value={faucetCollector}
            onChange={handleAddressInput}
          />

          <Button
            disabled={cannotRequestTokens}
            width="100%"
            onClick={() => dripit()}
          >
            Send me Test Tokens{" "}
            {istransactionLoading && <ClipLoader color="#36d7b7" />}
          </Button>

          {
            <SuccessFaucetModal
              onClose={onClose}
              onOpen={onOpen}
              isOpen={isConfirmed}
            />
          }
        </VStack>
      )}
    </>
  );
};

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
    <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Success</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Text>You can Now proceed to test the donation DAPP</Text>
          <Button colorScheme="blue" mr={3}>
            Go to Donation App
          </Button>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

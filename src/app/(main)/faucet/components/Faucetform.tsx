"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ChainId } from "@/constants/config/chainId";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import abi from "@/constants/abi/faucetAbi.json";
import { baseSepoliaFaucet, sepoliaFaucet } from "@/constants/contract-address";
import { isAddress } from "viem";
import { useDebounce } from "@/hooks/useDebounce";
import SuccessFaucetModal from "./SuccessFaucetModal";
import ConnectButton from "@/components/wagmi/connectButton";
import { getUserEligibility, dripFaucet } from "@/utils/helpers/faucet";

enum addressEligibilityStatus {
  UNKNOWN,
  ELIGIBLE,
  NOTELIGIBLE,
  LOADING_STATUS,
}

const FaucetForm = ({ chainId }: { chainId: ChainId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, isConnected } = useAccount();
  const [faucetCollector, setFaucetCollector] = useState<string>("");
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
    event: React.ChangeEvent<HTMLInputElement>
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
            border={"1px solid #8140CE"}
            bg={"#907EF4"}
            _hover={{ bg: "#907EF4" }}
            color={"#FDFDFD"}
            fontSize={"14px"}
            isLoading={istransactionLoading}
          >
            Send me Test Tokens{" "}
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

export default FaucetForm;

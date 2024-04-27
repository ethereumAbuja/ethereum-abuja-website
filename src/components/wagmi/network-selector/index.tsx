"use client";

import { ChainId, ChainKey, SUPPORT_CHAINID } from "@/constants/config/chainId";
import React, { FC, Suspense, useCallback, useMemo, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Button,
  useToast,
  Box,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useSwitchChain, useAccount } from "wagmi";
import { ProviderRpcError, UserRejectedRequestError } from "viem";
import { useIsMounted } from "@/hooks/useIsMounted";
import { NetworkIcon } from "./network-icon";

export default function NetoworKSelector({
  CHAINS_LIST_TO_SELECT_FROM,
}: {
  CHAINS_LIST_TO_SELECT_FROM?: ChainId[];
}) {
  const { chains, switchChain } = useSwitchChain();
  const { chain } = useAccount();
  let toast = useToast();
  const isMounted = useIsMounted();
  const [open, setOpen] = useState(false);

  const onSwitchNetwork = useCallback<NetworkSelectorOnSelectCallback>(
    async (el, close) => {
      console.debug("onSwitchNetwork", el);
      try {
        if (switchChain && chain?.id !== el) {
          await switchChain({ chainId: el });
        }

        close();
      } catch (e) {
        console.error(`Failed to switch network: ${e}`);
        if (e instanceof UserRejectedRequestError) return;
        if (e instanceof ProviderRpcError) {
          toast({
            position: "bottom-right",
            render: () => (
              <Box color="white" p={3} bg="blue.500">
                Network Changed
              </Box>
            ),
          });
        }
      }
    },
    [chain?.id, switchChain]
  );

  const selected =
    isMounted && chain ? (chain?.id as ChainId) : ChainId.SEPOLIA;

  const CHAINLISTS = CHAINS_LIST_TO_SELECT_FROM ?? SUPPORT_CHAINID;

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button
            variant={"secondary"}
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            // gap=".5rem"
            borderRadius="0.3rem"
            border="1px solid #E2E8F0"
            padding="5px 10px"
            width={
              chain && SUPPORT_CHAINID.includes(chain.id) ? "332px" : "100%"
            }
            height={"3.2rem"}
          >
            <Suspense fallback={null}>
              {chain && SUPPORT_CHAINID.includes(chain.id) ? (
                <>
                  <Text>{ChainKey[selected as ChainId]}</Text>
                  <NetworkIcon chainId={selected} width={20} height={20} />
                </>
              ) : (
                <Button
                  onClick={() => switchChain({ chainId: CHAINLISTS[0] })}
                  bgColor="transparent"
                  fontWeight={500}
                  _hover={{
                    bg: "transparent",
                  }}
                  w="100%"
                >
                  Switch to Supported Chain
                </Button>
              )}
            </Suspense>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Select Network</PopoverHeader>
          <PopoverBody>
            <VStack gap="0.21rem" alignItems={"start"}>
              {CHAINLISTS.map((el) => (
                <Button
                  variant={"secondary"}
                  cursor="pointer"
                  gap="0.5rem"
                  key={el}
                  onClick={(value) => onSwitchNetwork(el, () => setOpen(false))}
                >
                  <NetworkIcon chainId={el} width={22} height={22} />
                  <Text>{ChainKey[el as ChainId]}</Text>
                </Button>
              ))}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export type NetworkSelectorOnSelectCallback<T extends number = ChainId> = (
  chainId: T,
  close: () => void
) => void;

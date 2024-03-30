"use client";

import {
  ChainId,
  ChainKey,
  SUPPORT_CHAINID,
  DONATION_TOKENS,
  CURRENCIES,
} from "@/constants/config/chainId";
import React, { FC, Suspense, useCallback, useMemo, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
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
import { useSearchParams } from "next/navigation";

export default function CurrencySwitch() {
  const { chain } = useAccount();
  let toast = useToast();
  const isMounted = useIsMounted();
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  const updateDonationToken = (_donationToken: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("donationtoken", _donationToken);
  };

  return (
    <div>
      <Popover>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Button
                variant={"secondary"}
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                gap=".5rem"
                borderRadius="0.3rem"
                padding="5px 10px"
              >
                <Text>{searchParams.get("donationtoken")}</Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Select Currency</PopoverHeader>
              <PopoverBody>
                <VStack gap="0.2rem" alignItems={"start"}>
                  {CURRENCIES.map((el) => (
                    <Button
                      variant={"secondary"}
                      cursor="pointer"
                      key={el}
                      onClick={() => {
                        new URLSearchParams(searchParams).set(
                          "donationtoken",
                          el,
                        );
                        // updateDonationToken(el);
                        console.log(
                          "updating donation token",
                          new URLSearchParams(searchParams).get(
                            "donationtoken",
                          ),
                        );
                        onClose();
                      }}
                    >
                      <Text>{el as string}</Text>
                    </Button>
                  ))}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
    </div>
  );
}

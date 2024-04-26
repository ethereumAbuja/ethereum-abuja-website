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
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDonationToken } from "@/store/donationTokenSlice/hooks";

export default function CurrencySwitch() {
  const { chain } = useAccount();
  let toast = useToast();
  const isMounted = useIsMounted();
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<DONATION_TOKENS>(
    DONATION_TOKENS.USDT,
  );
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const xxx = useDonationToken();

  // const createQueryString = useCallback(
  //   (values: { name: string; value: string | null }[]) => {
  //     const params = new URLSearchParams(searchParams);
  //     values.forEach(({ name, value }) => {
  //       if (value === null) {
  //         params.delete(name);
  //       } else {
  //         params.set(name, value);
  //       }
  //     });
  //     return params.toString();
  //   },
  //   [searchParams],
  // );

  // const updateSearchParams = useCallback<{ (_donationToken: string): void }>(
  //   (_donationToken) => {
  //     console.log("set_donationToken", _donationToken);
  //     push(
  //       `${pathname}?${createQueryString([
  //         { name: "donationtoken", value: _donationToken },
  //       ])}`,
  //       { scroll: false },
  //     );
  //   },
  //   [createQueryString, pathname, push],
  // );

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
                        xxx(el);
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

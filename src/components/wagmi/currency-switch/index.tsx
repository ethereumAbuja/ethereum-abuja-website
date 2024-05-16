"use client";

import {
  Button,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { DONATION_TOKENS, CURRENCIES } from "@/constants/config/chainId";
import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDonationToken } from "@/store/donationTokenSlice/hooks";

export default function CurrencySwitch() {
  const [currency, setCurrency] = useState<DONATION_TOKENS>(
    DONATION_TOKENS.USDT
  );
  const searchParams = useSearchParams();
  const pathname = usePathname();

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
      <Menu>
        {({ isOpen, onClose }) => (
          <>
            <MenuButton
              as={Button}
              variant={"secondary"}
              display="flex"
              bgColor="rgba(241, 242, 254, 0.70)"
              alignItems={"center"}
              justifyContent={"center"}
              h="27px"
              borderRadius="20px"
              padding="5px"
              rightIcon={<TiArrowSortedDown />}
            >
              <Text fontSize={"14px"} fontWeight={"500"} color={"#1D2E32"}>
                {searchParams.get("donationtoken")}
              </Text>
            </MenuButton>
            <MenuList minW="100px">
              <VStack gap="0.2rem" alignItems={"start"}>
                {CURRENCIES.map((el) => (
                  <MenuItem
                    key={el}
                    onClick={() => {
                      xxx(el);
                      onClose();
                    }}
                  >
                    <Text>{el}</Text>
                  </MenuItem>
                ))}
              </VStack>
            </MenuList>
          </>
        )}
      </Menu>
    </div>
  );
}

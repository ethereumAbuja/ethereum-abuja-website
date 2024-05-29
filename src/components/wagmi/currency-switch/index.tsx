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
import { useSearchParams, usePathname } from "next/navigation";
import { useDonationToken } from "@/store/donationTokenSlice/hooks";

export default function CurrencySwitch() {
  const [currency, setCurrency] = useState<DONATION_TOKENS>(
    DONATION_TOKENS.USDT
  );
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const xxx = useDonationToken();

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

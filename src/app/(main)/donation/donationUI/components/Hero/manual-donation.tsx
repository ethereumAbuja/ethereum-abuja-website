import { ETHABJ_WALLET_ADDRESS } from "@/utils/config";
import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import React from "react";
import clipboardCopy from "clipboard-copy";
import CustomToast from "@/components/CustomToast";
import CustomErrorToast from "@/components/CustomErrorToast";

function ManualDonation() {
  let toast = useToast();

  //***FN to handle copy button click
  const handleCopyButtonClick = () => {
    if (!ETHABJ_WALLET_ADDRESS) {
      CustomErrorToast(
        toast,
        "Warning || address was unable to copy",
        4000,
        "bottom-left"
      );
    } else {
      clipboardCopy(ETHABJ_WALLET_ADDRESS).then(() => {
        CustomToast(
          toast,
          "You just copied ETHAbuja Wallet Address!",
          5000,
          "bottom"
        );
      });
    }
  };

  return (
    <Box>
      <Text color={"#3A3A3A"} fontSize={"14px"} fontWeight={"500"} mb={"5px"}>
        Copy Wallet Address
      </Text>
      <Flex
        border={"1px solid #E2E8F0"}
        p={"5px"}
        borderRadius={"md"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Input
          fontSize={"16px"}
          fontWeight={"500"}
          color={"#1D2E32"}
          p={"0.5rem"}
          _focus={{
            boxShadow: "none",
          }}
          border={"none"}
          value={ETHABJ_WALLET_ADDRESS}
        />

        <Button
          h={"28px"}
          p={"9px 12px"}
          borderRadius={"176px"}
          bg={"rgba(241, 242, 254, 0.70)"}
          onClick={handleCopyButtonClick}
        >
          <Text fontSize={"14px"} fontWeight={"500"} color={"#1D2E32"}>
            Copy
          </Text>
        </Button>
      </Flex>
    </Box>
  );
}

export default ManualDonation;

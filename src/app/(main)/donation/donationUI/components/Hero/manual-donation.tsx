import { ETHABJ_WALLET_ADDRESS } from "@/utils/config";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import clipboardCopy from "clipboard-copy";
import CustomToast from "@/components/CustomToast";
import { ETHABJ_SVG } from "@/assets/svg";
import CustomErrorToast from "@/components/CustomErrorToast";

function ManualDonation() {
  const [copyAddress, setCopyAddress] = useState<boolean>(false);
  const [addName, setAddName] = useState<boolean>(false);
  let toast = useToast();

  //***FN to handle copy button click
  const handleCopyButtonClick = () => {
    if (!ETHABJ_WALLET_ADDRESS) {
      CustomErrorToast(
        toast,
        "Warning || address was unable to copy",
        4000,
        "bottom-left",
      );
    } else {
      clipboardCopy(ETHABJ_WALLET_ADDRESS).then(() => {
        CustomToast(
          toast,
          "You just copied ETHAbuja Wallet Address!",
          5000,
          "bottom",
        );
      });
    }
  };

  ///***FN to handle the Checkbox of Copy Address
  const handleCopyAddress = () => {
    setCopyAddress((prevCopyAddress) => !prevCopyAddress);
    if (addName) setAddName(false);
  };

    //***FN to handle the Checkbox of AddName
    const handleAddName = () => {
        setAddName((prevAddName) => !prevAddName);
        if (copyAddress) setCopyAddress(false);
      };

  return (
    <Box px={["24px", "24px", "24px", "48px"]} py={"24px"}>
      <Box mb={"2rem"}>
        <Flex flexDir={["column", "row", "row"]} gap={"16px"}>
          <Flex display={"inline-flex"} gap={"4px"} alignItems={"center"}>
            <Checkbox
              isChecked={copyAddress}
              onChange={handleCopyAddress}
              _checked={{
                "& .chakra-checkbox__control": {
                  background: "#8140CE",
                  borderColor: "#8140CE",
                  borderRadius: "50px",
                },
              }}
            >
              <Text color={"#1D2E32"} fontSize={"14px"} fontWeight={"500"}>
                Copy address Instead
              </Text>
            </Checkbox>
            <Tooltip
              label="If you feel uncomfortable connecting your wallet, you can always just copy the address and send from your metamask instead"
              placement="top"
              border="0.4px solid #8140CE"
              color="black"
              fontSize={"12px"}
              borderRadius={"8px"}
              textAlign={"center"}
              p={".5rem"}
              bgColor="white"
            >
              {ETHABJ_SVG().questionMark()}
            </Tooltip>
          </Flex>

          <Flex display={"inline-flex"} gap={"4px"} alignItems={"center"}>
            <Checkbox
              isChecked={addName}
              onChange={handleAddName}
              _checked={{
                "& .chakra-checkbox__control": {
                  background: "#8140CE",
                  borderColor: "#8140CE",
                  borderRadius: "50px",
                },
              }}
            >
              <Text color={"#1D2E32"} fontSize={"14px"} fontWeight={"500"}>
                Add name as sponsor
              </Text>
            </Checkbox>
            <Tooltip
              label="Get your name on the wall of sponsors below, nothing big, just a fun way to say thank you"
              placement="top"
              border="0.4px solid #8140CE"
              color="black"
              fontSize={"12px"}
              borderRadius={"8px"}
              textAlign={"center"}
              p={".5rem"}
              bgColor="white"
            >
              {ETHABJ_SVG().questionMark()}
            </Tooltip>
          </Flex>
        </Flex>
      </Box>

      {copyAddress ? (
        <Box>
          <Text
            color={"#3A3A3A"}
            fontSize={"14px"}
            fontWeight={"500"}
            mb={"5px"}
          >
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
      ) : (
        <Box>
          {addName ? (
            <Box w={["100%", "49%", "49%"]} mb={"1rem"}>
              <Text
                color={"#3A3A3A"}
                fontSize={"14px"}
                fontWeight={"500"}
                mb={"5px"}
              >
                Name (or pseudonym)
              </Text>
              <Box border={"1px solid #E2E8F0"} p={"5px"} borderRadius={"md"}>
                <Input
                  p={"0"}
                  _focus={{
                    boxShadow: "none",
                  }}
                  border={"none"}
                  type="text"
                />
              </Box>
            </Box>
          ) : (
            ""
          )}

          <Flex flexDir={["column", "row", "row"]} gap={"16px"} mb={"24px"}>
            <Box w={"100%"}>
              <Text
                color={"#3A3A3A"}
                fontSize={"14px"}
                fontWeight={"500"}
                mb={"5px"}
              >
                Amount
              </Text>
              <Flex
                border={"1px solid #E2E8F0"}
                py={"5px"}
                pr={"10px"}
                pl={"5px"}
                borderRadius={"md"}
                alignItems={"center"}
              >
                <Input
                  p={"0"}
                  type="number"
                  _focus={{
                    boxShadow: "none",
                  }}
                  border={"none"}
                  onChange={handleDonationAmount}
                />
                <Box>
                  <CurrencySwitch />
                </Box>
                {isSuccessDonToken && (
                  <Box marginLeft={"4px"}>
                    <Text whiteSpace={"nowrap"}>
                      {" "}
                      Bal:{" "}
                      <span>
                        {Number(formatUnits(donationTokenBal, 18)).toFixed(2)}
                      </span>{" "}
                    </Text>
                  </Box>
                )}
              </Flex>
            </Box>

            <VStack w={"100%"} display={"flex"} gap="2" alignItems={"start"}>
              <Text color={"#3A3A3A"} fontSize={"14px"} fontWeight={"500"}>
                Select Chain
              </Text>
              <NetoworKSelector />
            </VStack>
          </Flex>

          <Flex justifyContent={["center", "flex-end", "flex-end"]}>
            {!isConnected && <ConnectButton />}
            {isConnected && donationReady ? (
              <Button
                display={"flex"}
                w={["100%", "160px", "160px"]}
                py={"11px"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"10px"}
                borderRadius={"8px"}
                border={"1px solid #8140CE"}
                bg={"#907EF4"}
                _hover={{ bg: "#907EF4" }}
                disabled={
                  donationTokenApproval == allowanceState.UNKNOWN ? true : false
                }
                onClick={() => {
                  onOpen();
                }}
                // onClick={donatefn}
              >
                <Text
                  color={"#FDFDFD"}
                  fontSize={"14px"}
                  fontWeight={"500"}
                  lineHeight={"23.1px"}
                >
                  Contribute
                </Text>
              </Button>
            ) : (
              isConnected && (
                <Button
                  display={"flex"}
                  w={["100%", "160px", "160px"]}
                  py={"11px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  borderRadius={"8px"}
                  border={"1px solid #8140CE"}
                  bg={"#907EF4"}
                  _hover={{ bg: "#907EF4" }}
                  onClick={approveToken}
                >
                  Approve
                </Button>
              )
            )}
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default ManualDonation;

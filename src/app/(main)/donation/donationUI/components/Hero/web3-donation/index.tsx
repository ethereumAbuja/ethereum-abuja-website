import ConnectButton from "@/components/wagmi/connectButton";
import CurrencySwitch from "@/components/wagmi/currency-switch";
import NetoworkSelector from "@/components/wagmi/network-selector";
import { DONATION_CONTRACT_ADDRESS } from "@/constants/contract-address";
import { useTokenAllowance } from "@/hooks/wagmi/approvals/useTokenAllowance";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Address, erc20Abi, formatUnits, parseEther } from "viem";
import { useAccount, useReadContract } from "wagmi";
import {
  ChainId,
  DONATION_SUPPORTED_CHAINID,
} from "@/constants/config/chainId";
import { SponsorDetailsType } from "@/hooks/useAddSponsor";
import { TransactionModal } from "./donation-modal";
import { allowanceState } from "@/utils";
import { TokenQuantityInput } from "@/components/TokenQuantityInput";
import { formatBalance } from "@/utils/formatBalance";
import BalancePanel from "./balance-panel";

interface Props {
  addName: boolean;
  _donationToken: Address;
}

function Web3Donation({ addName, _donationToken }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, isConnected, chainId } = useAccount();
  const [donationTokenApproval, setDonationTokenApproval] =
    useState<allowanceState>(allowanceState.UNKNOWN);

  const [sponsorDetails, setSponsorDetails] = useState<SponsorDetailsType>({
    name: "",
    twitter: "",
    amount: "",
  });
  const [amount, setAmount] = useState<string>("0.10");

  const { data: PtokenAllowance, refetch: refetchAllowance } =
    useTokenAllowance({
      chainId,
      token: _donationToken as Address,
      owner: address,
      spender: DONATION_CONTRACT_ADDRESS[chainId as ChainId] as Address,
    });

  //Check approval state when inpute token value
  const handleDonationAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAmount(e.target.value);
    setSponsorDetails((prevState) => ({
      ...prevState,
      amount: parseEther(amount).toString(),
    }));
    PtokenAllowance &&
    Number(formatUnits(PtokenAllowance ?? 0n, 18)) >= Number(e.target.value)
      ? setDonationTokenApproval(allowanceState.APPROVED)
      : setDonationTokenApproval(allowanceState.UNAPPROVED);
  };

  //FETCH DONATION TOKEN BALANCE
  const {
    data: donationTokenBal,
    isFetching: isFetchingBalance,
    isError: isFetchBalanceError,
    isSuccess: isFetchBalanceSuccess,
    refetch: refetchBalance,
  } = useReadContract({
    abi: erc20Abi,
    address: _donationToken as Address,
    functionName: "balanceOf",
    args: [address as Address],
    scopeKey: "Donation tokenBalance",
  });

  useEffect(() => {
    refetchBalance();
  }, []);

  //INPUT BOXES HANDLE EVENTS
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSponsorDetails((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handleSponsorNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSponsorDetails((prevState) => ({
      ...prevState,
      twitter: event.target.value,
    }));
    // console.log(sponsorDetails);
  };

  const isInsufficientBalance = address && Number(amount) < 0;

  return (
    <Box>
      {addName && (
        <Flex
          flexDir={["column", "row", "row"]}
          gap={["0.2rem", "0.2rem", "1rem"]}
          w={["100%"]}
          mb={"1rem"}
        >
          <Box w={["100%", "49%", "49%"]} mb={"1rem"}>
            <Text
              color={"#3A3A3A"}
              fontSize={"14px"}
              fontWeight={"500"}
              mb={"5px"}
              whiteSpace={"nowrap"}
            >
              Name (or pseudonym)
            </Text>
            <Box border={"1px solid #E2E8F0"} p={"5px"} borderRadius={"md"}>
              <Input
                name={sponsorDetails.name}
                py="10px"
                px="10px"
                _focus={{
                  boxShadow: "none",
                }}
                border={"none"}
                type="text"
                placeholder="Name(or pseudonym)"
                onChange={handleUsernameChange}
              />
            </Box>
          </Box>
          <Box w={["100%", "49%", "49%"]} mb={"1rem"}>
            <Text
              color={"#3A3A3A"}
              fontSize={"14px"}
              fontWeight={"500"}
              mb={"5px"}
              whiteSpace={"nowrap"}
            >
              X (Twitter) handle
            </Text>
            <Box border={"1px solid #E2E8F0"} p={"5px"} borderRadius={"md"}>
              <Input
                name={sponsorDetails.twitter}
                py="10px"
                px="10px"
                _focus={{
                  boxShadow: "none",
                }}
                border={"none"}
                type="text"
                placeholder="x(username)"
                onChange={handleSponsorNameChange}
              />
            </Box>
          </Box>
        </Flex>
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
              placeholder="0.10"
              type="number"
              _focus={{
                boxShadow: "none",
              }}
              value={amount}
              border={"none"}
              onChange={handleDonationAmount}
            />
            <Box>
              <CurrencySwitch />
            </Box>
            <Box marginLeft={"4px"}>
              <Text whiteSpace={"nowrap"}>
                {" "}
                <BalancePanel
                  balance={donationTokenBal}
                  isFetchingBalance={isFetchingBalance}
                  isFetchBalanceError={isFetchBalanceError}
                  isFetchBalanceSuccess={isFetchBalanceSuccess}
                />
              </Text>
            </Box>
          </Flex>
          <TokenQuantityInput
            quantity={amount}
            maxValue={formatBalance(donationTokenBal ?? BigInt(0))}
            onChange={setAmount}
          />
        </Box>

        <VStack w={"100%"} display={"flex"} gap="2" alignItems={"start"}>
          <Text color={"#3A3A3A"} fontSize={"14px"} fontWeight={"500"}>
            Select Chain
          </Text>
          <NetoworkSelector
            CHAINS_LIST_TO_SELECT_FROM={DONATION_SUPPORTED_CHAINID}
          />
        </VStack>
      </Flex>
      <Text></Text>

      {/* 
     
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     // Connect Button and Contribute Button
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     */}
      <Flex justifyContent={["center", "flex-end", "flex-end"]}>
        {!isConnected && <ConnectButton />}
        {isConnected && !isInsufficientBalance ? (
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
            color={"#FDFDFD"}
            fontSize={"14px"}
            fontWeight={"500"}
            lineHeight={"23.1px"}
            onClick={() => {
              onOpen();
            }}
          >
            Contribute
          </Button>
        ) : (
          isConnected &&
          isInsufficientBalance && (
            <Button
              display={"flex"}
              w={["100%", "200px", "200px"]}
              p="10px 20px"
              justifyContent={"center"}
              alignItems={"center"}
              fontWeight={400}
              gap={"10px"}
              borderRadius={"8px"}
              colorScheme="red"
            >
              InSufficientBalance
            </Button>
          )
        )}

        <TransactionModal
          setAmount={setAmount}
          amount={amount}
          refetchBalance={refetchBalance}
          isOpen={isOpen}
          onClose={onClose}
          addName={addName}
          sponsorDetails={sponsorDetails}
          setSponsorDetails={setSponsorDetails}
        />
      </Flex>
    </Box>
  );
}

export default Web3Donation;

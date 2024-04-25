import { useAccount } from "wagmi";
import { ChainId, DONATION_TOKENS, SUPPORT_CHAINID } from "../config/chainId";
import { useNetworkConnectorUpdater } from "@/hooks/useSwitchNetwork";
import { DonationToken } from "./types";

export const DONATION_CONTRACT_ADDRESS: {
  [chainId in ChainId]: string;
} = {
  [ChainId.SEPOLIA]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BASE_SEPOLIA]: "0xC3f8294bC04c6F70c2bC75b480BBD5307710d60a",
};

type donationTokens = { [chainId in ChainId]: string };

export const USDC_ADDRESS: donationTokens = {
  [ChainId.SEPOLIA]: "0xA84C523048aD29ca9533f69A40C3f5C07e44Db87",
  [ChainId.BASE_SEPOLIA]: "0x0B22B3C30474F622dd9b8d662FB99cF24e935728",
};

export const USDT_ADDRESS: donationTokens = {
  [ChainId.SEPOLIA]: "0xE0167056964f973dfF5Ab6910BFFa3cE762C411f",
  [ChainId.BASE_SEPOLIA]: "0xbdE636DE381E38030C9a115C0035eb14588C29Ce",
};

const DONATION_TOKENS_ADDRESSES: { [token in DonationToken]: donationTokens } =
  {
    USDT: USDT_ADDRESS,
    USDC: USDC_ADDRESS,
  };

export const getDonationTokenAddress = (
  chainId?: number | undefined,
  donationTokenTicker?: DonationToken | undefined,
): string => {
  const _chainId = chainId ?? ChainId.SEPOLIA;

  const _donationTokenTicker = donationTokenTicker ?? ("USDT" as DonationToken); // This is to make Use of USDT by default

  const contractAddress =
    DONATION_TOKENS_ADDRESSES[_donationTokenTicker][_chainId as ChainId];

  return contractAddress;
};

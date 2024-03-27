import { ChainId, DONATION_TOKENS } from "../config/chainId";

export const DONATION_CONTRACT_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BASE]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.ARBITRIUM]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BNB_SMART_CHAIN]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
};

export const USDC_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: "0x0B22B3C30474F622dd9b8d662FB99cF24e935728",
  [ChainId.BASE]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.ARBITRIUM]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BNB_SMART_CHAIN]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
};

export const USDT_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: "0xE0167056964f973dfF5Ab6910BFFa3cE762C411f",
  [ChainId.BASE]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.ARBITRIUM]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BNB_SMART_CHAIN]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
};

export const getDonationTokenAddress = ({
  donationToken,
  chainId,
}: {
  donationToken: DONATION_TOKENS;
  chainId: ChainId;
}) => {
  if (donationToken == DONATION_TOKENS.USDC) return USDC_ADDRESS[chainId];
  else if (donationToken == DONATION_TOKENS.USDT) return USDT_ADDRESS[chainId];
  else return "An error occured";
};

// const ETHERSCAN_URL: { [chainId in ChainId]: string } = {
//   1: "https://etherscan.io",
//   84532: "https://sepolia-explorer.base.org",
// };

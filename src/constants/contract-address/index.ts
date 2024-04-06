import { useAccount } from "wagmi";
import { ChainId, DONATION_TOKENS, SUPPORT_CHAINID } from "../config/chainId";

export const DONATION_CONTRACT_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BASE_SEPOLIA]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.ETHEREUM]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BASE]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.ARBITRIUM]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BNB_SMART_CHAIN]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
};

export const USDC_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: "0x0B22B3C30474F622dd9b8d662FB99cF24e935728",
  [ChainId.BASE_SEPOLIA]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.ETHEREUM]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BASE]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.ARBITRIUM]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BNB_SMART_CHAIN]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
};

export const USDT_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: "0xE0167056964f973dfF5Ab6910BFFa3cE762C411f",
  [ChainId.BASE_SEPOLIA]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.ETHEREUM]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BASE]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.ARBITRIUM]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
  [ChainId.BNB_SMART_CHAIN]: "0xe76Ce85d258AC678E4bE56a1cd980B3046B7b50e",
};

// export const getDonationTokenAddress = ({
//   donationToken,
//   chainId,
// }: {
//   donationToken: DONATION_TOKENS;
//   chainId: ChainId;
// }) => {
//   if (donationToken == DONATION_TOKENS.USDC) return USDC_ADDRESS[chainId];
//   else if (donationToken == DONATION_TOKENS.USDT) return USDT_ADDRESS[chainId];
//   else return "An error occured";
// };

export const getDonationTokenAddress = (
  searchParams: URLSearchParams,
): string => {
  const chainIdParam = searchParams.get("chainId");
  let chainId: ChainId | undefined;

  if (chainIdParam) {
    chainId = parseInt(chainIdParam, 10);

    if (!SUPPORT_CHAINID.includes(chainId)) {
      throw new Error("Unsupported chain ID provided in URL");
    }
  } else {
    const { chain } = useAccount();
    chainId = chain?.id;
  }

  const donationTokenFromUrl = searchParams.get("donationtoken");

  if (
    !chainId ||
    !donationTokenFromUrl ||
    ![DONATION_TOKENS.USDT, DONATION_TOKENS.USDC].includes(
      donationTokenFromUrl as DONATION_TOKENS,
    )
  ) {
    throw new Error("Missing or invalid chain ID or donation token in URL");
  }

  const contractAddressMapping =
    donationTokenFromUrl === DONATION_TOKENS.USDT ? USDT_ADDRESS : USDC_ADDRESS;

  const contractAddress = contractAddressMapping[chainId];

  if (!contractAddress) {
    throw new Error(
      "Contract address not found for provided chain and donation token",
    );
  }

  return contractAddress;
};

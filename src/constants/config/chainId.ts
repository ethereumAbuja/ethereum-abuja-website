F

export const SUPPORT_CHAINID: ChainId[] = [
  ChainId.SEPOLIA,
  ChainId.BASE_SEPOLIA,
  // ChainId.ETHEREUM,
  // ChainId.BASE,
  // ChainId.ARBITRIUM,
  // ChainId.BNB_SMART_CHAIN,
];
export const DONATION_SUPPORTED_CHAINID: ChainId[] = [
  ChainId.SEPOLIA,
  ChainId.BASE_SEPOLIA,
];

export const ChainKey = {
  [ChainId.SEPOLIA]: "Ethereum Sepolia",
  [ChainId.BASE_SEPOLIA]: "Base Sepolia",
  // [ChainId.BASE]: "Base",
  // [ChainId.ETHEREUM]: "Ethereum Mainnet",
  // [ChainId.ARBITRIUM]: "Arbitrum",
  // [ChainId.BNB_SMART_CHAIN]: "BNB Chain",
} as const;

export function isSupportedChainId(chainId: number): boolean {
  return Object.values(ChainId).includes(chainId as ChainId);
}

export enum DONATION_TOKENS {
  USDT = "USDT",
  USDC = "USDC",
}

export const CURRENCIES: DONATION_TOKENS[] = [
  DONATION_TOKENS.USDT,
  DONATION_TOKENS.USDC,
];

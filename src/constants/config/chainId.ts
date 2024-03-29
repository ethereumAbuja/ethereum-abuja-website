export enum ChainId {
  ETHEREUM = 1,
  SEPOLIA = 11155111,
  BASE = 8453,
  ARBITRIUM = 42161,
  BNB_SMART_CHAIN = 56,
}

export const SUPPORT_CHAINID: ChainId[] = [
  ChainId.SEPOLIA,
  ChainId.ETHEREUM,
  ChainId.BASE,
  ChainId.ARBITRIUM,
  ChainId.BNB_SMART_CHAIN,
];
export const ChainKey = {
  [ChainId.SEPOLIA]: "Ethereum Sepolia",
  [ChainId.BASE]: "Base",
  [ChainId.ETHEREUM]: "Ethereum Mainnet",
  [ChainId.ARBITRIUM]: "Arbitrum",
  [ChainId.BNB_SMART_CHAIN]: "BNB Chain",
} as const;

export function isSupportedChainId(chainId: number): boolean {
  return Object.values(ChainId).includes(chainId as ChainId);
}

export enum DONATION_TOKENS {
  USDT = "USDT",
  USDC = "USDC",
}

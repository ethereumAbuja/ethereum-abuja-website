
interface Chain {
  value: string;
  label: string;
}

export const chains: Chain[] = [
  { value: 'ethereum', label: 'Ethereum' },
  { value: 'sepolia', label: 'Sepolia' },
  { value: 'arbitrum', label: 'Arbitrum' },
  { value: 'optimism', label: 'Optimism' },
  { value: 'base', label: 'Base' },
  { value: 'bsc', label: 'Binance Smart Chain' },
  // Add more chains as needed
];
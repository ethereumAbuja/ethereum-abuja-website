import { ChainId } from "@/constants/config/chainId";
import { baseSepoliaFaucet, sepoliaFaucet } from "@/constants/contract-address";
import abi from "@/constants/abi/faucetAbi.json";
import { readContract, writeContract } from "@wagmi/core";

import { http, createConfig } from "@wagmi/core";
import { baseSepolia, sepolia } from "@wagmi/core/chains";

export const appconfig = createConfig({
  chains: [baseSepolia, sepolia],
  transports: {
    [baseSepolia.id]: http(),
    [sepolia.id]: http(),
  },
});

export async function dripFaucet(address: string, chainId: ChainId) {
  const result = await writeContract(appconfig, {
    abi,
    address:
      chainId == ChainId.BASE_SEPOLIA ? baseSepoliaFaucet : sepoliaFaucet,
    functionName: "dripTokens",
    args: [address],
    chainId,
  });

  return result;
}
export const getUserEligibility = async (address: string, chainId: ChainId) => {
  const result = await readContract(appconfig, {
    abi,
    address:
      chainId == ChainId.BASE_SEPOLIA ? baseSepoliaFaucet : sepoliaFaucet,
    functionName: "isTesterEligible",
    args: [address],
    chainId,
  });

  return result;
};

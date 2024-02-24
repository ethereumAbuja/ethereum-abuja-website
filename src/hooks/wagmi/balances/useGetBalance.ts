"use client";

import { ChainId } from "@/constants/config/chainId";
import { Address, erc20Abi } from "viem";
import { useReadContract } from "wagmi";
interface UseTokenAllowance {
  token: Address | undefined;
  chainId: ChainId | undefined;
  address: Address | undefined;
}

export const useAccountBalance = ({
  chainId,
  token,
  address,
}: UseTokenAllowance) => {
  if (!address || !chainId || !token) return null;

  return useReadContract({
    chainId,
    address: token as Address,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address],
  });
};

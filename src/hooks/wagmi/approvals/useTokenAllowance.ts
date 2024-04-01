"use client";

import { ChainId } from "@/constants/config/chainId";
import { Address, erc20Abi } from "viem";
import { useReadContract } from "wagmi";

interface UseTokenAllowance {
  token?: Address | undefined;
  chainId: ChainId | undefined;
  owner: Address | undefined;
  spender: Address | undefined;
  enabled?: boolean;
}

export const useTokenAllowance = ({
  chainId,
  token,
  owner,
  spender,
}: UseTokenAllowance) => {
  return useReadContract({
    chainId,
    address: token ? (token as Address) : undefined,
    abi: erc20Abi,
    functionName: "allowance",
    args: [owner as Address, spender as Address],
  });
};

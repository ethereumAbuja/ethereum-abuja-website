import {
  useReadContract,
  useSimulateContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { hexToDecimal } from "../../../constants/helpers";
import { Address, formatUnits } from "viem";
import ERC20TOKENABI from "../../../constants/abi/erc20.abi.json";
import { DONATION_CONTRACT_ADDRESS } from "@/constants/contract-address";
import { ChainId } from "@/constants/config/chainId";
import { useMemo } from "react";
import { useTokenAllowance } from "./useTokenAllowance";

interface approveParamsTypes {
  amount: bigint;
  token: Address;
  chainId: ChainId;
  owner: Address | undefined;
  spender: Address | undefined;
}

export enum ApprovalState {
  LOADING = "LOADING",
  UNKNOWN = "UNKNOWN",
  NOT_APPROVED = "NOT_APPROVED",
  PENDING = "PENDING",
  APPROVED = "APPROVED",
}

export const useApproveToken = ({
  token,
  chainId,
  amount,
  owner,
  spender,
}: approveParamsTypes) => {
  // check token allowance and return approve if token allownace is equal to amount
  const {
    data: allowance,
    isLoading: isAllowanceLoading,
    refetch,
  } = useTokenAllowance({
    token,
    owner,
    spender,
    chainId,
  });

  // simulating approval for approving ethabuja donation contract to sepnd user money
  const { data } = useSimulateContract({
    address: token,
    abi: ERC20TOKENABI,
    functionName: "approve",
    args: [
      DONATION_CONTRACT_ADDRESS[chainId],
      amount ? formatUnits(amount,18) : "0",
    ], // Convert to string if not undefined
  });

  //write trx
  const {
    data: writeData,
    isPending: approveTokenLoading,
    writeContract,
  } = useWriteContract();

  writeContract({
    address: token,
    abi: ERC20TOKENABI,
    functionName: "approve",
    args: [
      DONATION_CONTRACT_ADDRESS[chainId],
      amount ? formatUnits(amount, 18) : "0",
    ], // Convert to string if not undefined
  });

  const {
    isError: approveError,
    isSuccess: approveSuccess,
    isLoading: approveLoading,
  } = useWaitForTransactionReceipt({
    hash: writeData,
  });


  return useMemo(() => {
    let state = ApprovalState.UNKNOWN;
    if (
      allowance &&
      amount &&
      Number(formatUnits(allowance, 18)) > Number(formatUnits(amount, 18))
    )
      state = ApprovalState.APPROVED;
    else if (
      allowance && amount
      Number(formatUnits(allowance, 18)) == Number(formatUnits(amount, 18))
    )
      state = ApprovalState.APPROVED;
    else if (approveLoading) state = ApprovalState.PENDING;
    else if (isAllowanceLoading) state = ApprovalState.LOADING;
    else if (
      allowance &&
      amount &&
      Number(formatUnits(allowance, 18)) < Number(formatUnits(amount, 18))
    )
      state = ApprovalState.NOT_APPROVED;

    return [state, approveLoading, approveSuccess, approveError];
  }, [
    allowance,
    amount,
    isAllowanceLoading,
    approveLoading,
    approveError,
    approveSuccess,
  ]);
};

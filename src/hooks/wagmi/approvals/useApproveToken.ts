import {
  useReadContract,
  useSimulateContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { hexToDecimal } from "../../../constants/helpers";
import { Address, parseEther } from "viem";
import ERC20TOKENABI from "../../../constants/abi/erc20.abi.json";
import {
  DONATION_CONTRACT_ADDRESS,
} from "@/constants/contract-address";
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
      amount ? parseEther(amount.toString()) : "0",
    ], // Convert to string if not undefined
  });

  //write trx
  const {
    data: writeData,
    isPending: approveTokenLoading,
    writeContract,
  } = useWriteContract();

  writeContract(data!.request);

  const {
    isError: approveError,
    isSuccess: approveSuccess,
    isLoading: approveLoading,
  } = useWaitForTransactionReceipt({
    hash: writeData,
  });

  // const tokenAuthorization = () => {
  //   const priceInput = price !== undefined ? parseEther(price.toString()) : "0";

  //   //@ts-ignore
  //   if (hexToDecimal(tokenRead?._hex) > hexToDecimal(priceInput?._hex)) {
  //     write(contractDataConfig!.request);
  //   } else {
  //     writeContract(data!.request);
  //   }
  // };

  // return {
  //   approveTokenLoading,
  //   approveError,
  //   approveSuccess,
  //   approveLoading,
  //   tokenAuthorization,
  //   writeLoading,
  //   waitError,
  //   waitSuccess,
  //   waitLoading,
  // };

  return useMemo(() => {
    let state = ApprovalState.UNKNOWN;
    if (
      parseEther(allowance?.toString()!) &&
      parseEther(amount?.toString()!) &&
      parseEther(allowance?.toString()!) > parseEther(amount?.toString()!)
    )
      state = ApprovalState.APPROVED;
    else if (
      parseEther(allowance?.toString()!) &&
      parseEther(amount?.toString()!) &&
      parseEther(allowance?.toString()!) == parseEther(amount?.toString()!)
    )
      state = ApprovalState.APPROVED;
    else if (approveLoading) state = ApprovalState.PENDING;
    else if (isAllowanceLoading) state = ApprovalState.LOADING;
    else if (
      parseEther(allowance?.toString()!) &&
      parseEther(amount?.toString()!) &&
      parseEther(allowance?.toString()!) < parseEther(amount?.toString()!)
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

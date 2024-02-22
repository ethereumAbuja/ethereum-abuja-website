import { Address, parseEther } from "viem";
import { useApproveToken } from "../approvals/useApproveToken";

import { useTokenAllowance } from "../approvals/useTokenAllowance";
import {
  useAccount,
  useReadContract,
  useSimulateContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import DONATION_ABI from "../../../constants/abi/donation.abi.json";
import {
  DONATION_CONTRACT_ADDRESS,
  getDonationTokenAddress,
} from "@/constants/contract-address";
import { ChainId, DONATION_TOKENS } from "@/constants/config/chainId";

interface contributionParams {
  amount: BigInt;
  chainId: ChainId;
  token: DONATION_TOKENS;
}

export const useContributionHandler = ({
  amount,
  token,
  chainId,
}: //spender is automatically ethabuja donation contract
contributionParams) => {
  const { address } = useAccount();

  const donationToken = getDonationTokenAddress({
    donationToken: token,
    chainId,
  });

  const {
    data: tokenAllowance,
    isError: tokenAllowanceFetchError,
    isSuccess: allowanceFetchSuccess,
  } = useTokenAllowance({
    token: donationToken as Address,
    chainId,
    spender: DONATION_CONTRACT_ADDRESS[chainId] as Address,
    owner: address,
  });

  if (
    allowanceFetchSuccess &&
    parseEther(tokenAllowance?.toString()) >= parseEther(amount.toString())
  ) {
    throw new Error("Not enough allowance");
  }

  return useHandleDonation({
    token: donationToken as Address,
    chainId,
    amount,
  });
};

const useHandleDonation = ({
  token,
  chainId,
  amount,
}: {
  token: Address;
  chainId: ChainId;
  amount: BigInt;
}) => {
  const { data: config } = useSimulateContract({
    address: DONATION_CONTRACT_ADDRESS[chainId] as Address,
    abi: DONATION_ABI,
    functionName: "donate",
    args: [token, amount],
  });

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  writeContract({
    address: DONATION_CONTRACT_ADDRESS[chainId] as Address,
    abi: DONATION_ABI,
    functionName: "donate",
    args: [token, amount],
  });

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    isError,
  } = useWaitForTransactionReceipt({
    hash,
  });

  return {
    isConfirming,
    isConfirmed,
    isError,
  };
};

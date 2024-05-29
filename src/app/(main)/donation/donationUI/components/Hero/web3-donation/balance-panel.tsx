import React, { useEffect, useState } from "react";
import { Address, erc20Abi, formatUnits } from "viem";
import { useAccount, useReadContract } from "wagmi";
import { Skeleton } from "@chakra-ui/react";
import { useAppSelector } from "@/hooks/rtkHooks";
import { RootState } from "@/store/store";
import { useIsMounted } from "@/hooks/useIsMounted";

function BalancePanel({
  balance,
  isFetchingBalance,
  isFetchBalanceError,
  isFetchBalanceSuccess,
}: {
  balance: bigint | undefined;
  isFetchingBalance: boolean;
  isFetchBalanceError: boolean;
  isFetchBalanceSuccess: boolean;
}) {
  const _donationToken = useAppSelector(
    (state: RootState) => state.donationTokenSlice.tokenAddress
  );

  const [donationBalance, setDonationBalance] = useState<Number>(0);

  const { address, chainId } = useAccount();
  const isMounted = useIsMounted();

  //FETCH DONATION TOKEN BALANCtE
  const {
    data: donationTokenBal,
    isFetching: isFetchinDonTokenBal,
    isError,
    isSuccess: isSuccessDonToken,
    refetch: refectBalance,
  } = useReadContract({
    abi: erc20Abi,
    address: _donationToken as Address,
    functionName: "balanceOf",
    args: [address as Address],
    scopeKey: "Donation tokenBalance",
  });

  useEffect(() => {
    setDonationBalance(Number(formatUnits(donationTokenBal ?? 0n, 18)));
  }, []);

  useEffect(() => {
    const refetchBalance = async () => {
      refectBalance();
      setDonationBalance(Number(formatUnits(donationTokenBal ?? 0n, 18)));
    };
    refetchBalance();
  }, [chainId, _donationToken, address, isMounted]);

  return (
    <>
      {isFetchingBalance || !isMounted ? (
        <Skeleton height="15px" />
      ) : isFetchBalanceSuccess && balance ? (
        <span>Bal: {Number(formatUnits(balance ?? 0n, 18))}</span>
      ) : isFetchBalanceError ? (
        <span></span>
      ) : null}
    </>
  );
}

export default BalancePanel;

import { setDonationBalance } from "@/store/donationTransactionSlice";
import React, { useEffect, useState } from "react";
import { Address, erc20Abi, formatUnits } from "viem";
import { useAccount, useReadContract } from "wagmi";
import { Skeleton } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";
import { RootState } from "@/store/store";
import { useIsMounted } from "@/hooks/useIsMounted";

//THis to display donation token balance, Did this to make code more readable.

function BalancePanel() {
  const donationTokenBalance = useAppSelector(
    (state: RootState) => state.donationTransactionSlice.DonationTokenBalance
  );

  const _donationToken = useAppSelector(
    (state: RootState) => state.donationTokenSlice.tokenAddress
  );

  const { address, chainId } = useAccount();
  const dispatch = useAppDispatch();
  const isMounted = useIsMounted();
  //I added the useState to solve the issue with balance not coming up when user connects wallet on first visit/load
  const [balance, setBalance] = useState<Number>();
  // console.log("token address", _donationToken);

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
    setBalance(Number(formatUnits(donationTokenBal ?? 0n, 18)));
  }, []);

  useEffect(() => {
    const refetchBalance = async () => {
      refectBalance();
      dispatch(
        setDonationBalance(Number(formatUnits(donationTokenBal ?? 0n, 18)))
      );
    };
    refetchBalance();
  }, [chainId, _donationToken, address, isMounted]);

  return (
    <>
      {isFetchinDonTokenBal || !isMounted ? (
        <Skeleton height="15px" />
      ) : isSuccessDonToken && balance ? (
        <span>{balance.toString()}</span>
      ) : // <span>{Number(formatUnits(donationTokenBal, 18)).toFixed(2)}</span>
      isError ? (
        <span></span>
      ) : // <span>0.00</span>
      null}
    </>
  );
}

export default BalancePanel;

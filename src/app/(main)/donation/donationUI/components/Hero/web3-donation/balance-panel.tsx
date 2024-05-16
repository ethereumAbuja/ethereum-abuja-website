import { setDonationBalance } from "@/store/donationTransactionSlice";
import React, { useEffect, useState } from "react";
import { Address, erc20Abi, formatUnits } from "viem";
import { useAccount, useReadContract } from "wagmi";
import { Skeleton } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useIsMounted } from "@/hooks/useIsMounted";

//THis to display donation token balance, Did this to make code more readable.

function BalancePanel() {
  const { address, chainId } = useAccount();
  const dispatch = useDispatch<AppDispatch>();
  //I added the useState to solve the issue with balance not coming up when user connects wallet on first visit/load
  const [balance, setBalance] = useState<Number>();
  const _donationToken = useSelector(
    (state: RootState) => state.donationTokenSlice.tokenAddress,
  );
  const isMounted = useIsMounted();
  console.log("token address", _donationToken);

  const donationTokenBalance = useSelector(
    (state: RootState) => state.donationTransactionSlice.DonationTokenBalance,
  );

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
      setBalance(Number(formatUnits(donationTokenBal ?? 0n, 18)));
      dispatch(
        setDonationBalance(Number(formatUnits(donationTokenBal ?? 0n, 18))),
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
      ) : isError ? (
        <span></span>
      ) : null}
    </>
  );
}

export default BalancePanel;

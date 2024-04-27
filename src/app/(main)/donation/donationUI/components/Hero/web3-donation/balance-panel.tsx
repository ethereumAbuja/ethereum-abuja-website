import { setDonationBalance } from "@/store/donationTransactionSlice";
import React, { useEffect } from "react";
import { Address, erc20Abi, formatUnits } from "viem";
import { useAccount, useReadContract } from "wagmi";
import { Skeleton } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";

//THis to display donation token balance, Did this to make code more readable.

function BalancePanel() {
  const { address, chainId } = useAccount();
  const dispatch = useDispatch<AppDispatch>();
  const _donationToken = useSelector(
    (state: RootState) => state.donationTokenSlice.tokenAddress
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
    isSuccessDonToken &&
      dispatch(
        setDonationBalance(Number(formatUnits(donationTokenBal ?? 0n, 18)))
      );
    refectBalance();
  }, [isSuccessDonToken, chainId, _donationToken]);

  return (
    <>
      {isFetchinDonTokenBal ? (
        <Skeleton height="15px" />
      ) : isSuccessDonToken ? (
        <span>{Number(formatUnits(donationTokenBal, 18)).toFixed(2)}</span>
      ) : isError ? (
        <span>0.00</span>
      ) : null}
    </>
  );
}

export default BalancePanel;

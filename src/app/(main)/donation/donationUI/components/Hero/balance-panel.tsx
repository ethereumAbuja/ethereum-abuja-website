import React from "react";
import { Address, erc20Abi } from "viem";
import { useReadContract } from "wagmi";

function BalancePanel({
  address,
  _donationToken,
}: {
  address: Address;
  _donationToken: Address;
}) {
  //FETCH DONATION TOKEN BALANCE
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
  return <div></div>;
}

export default BalancePanel;

import React from "react";
import { useAccountBalance } from "../balances/useGetBalance";
import { useAccount } from "wagmi";
import { Address } from "viem";

interface balanceProps {
  donationToken: Address;
}
function Balance({ donationToken }: balanceProps) {
  const { address, isConnected, chainId } = useAccount();
  
  if (!address) return null;

  const balanceState = useAccountBalance({
    token: donationToken as Address,
    chainId: chainId ?? 1,
    address: address,
  });


  return <div></div>;
}

export default Balance;

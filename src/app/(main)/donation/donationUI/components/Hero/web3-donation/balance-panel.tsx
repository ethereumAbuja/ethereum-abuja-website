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
  const isMounted = useIsMounted();

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

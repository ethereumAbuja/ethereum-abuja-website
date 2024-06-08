import React from "react";
import { formatUnits } from "viem";
import { Skeleton } from "@chakra-ui/react";
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

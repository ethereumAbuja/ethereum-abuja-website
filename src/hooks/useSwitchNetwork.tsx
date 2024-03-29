import { ChainId, isSupportedChainId } from "@/constants/config/chainId";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useAccount, useSwitchAccount } from "wagmi";

export function useNetworkConnectorUpdater() {
  const { chainId } = useAccount();
  const previousChainIdRef = useRef(chainId);
  const { isPending: loading } = useSwitchAccount();

  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const defaultedParams = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    if (!params.has("chainId"))
      params.set(
        "chainId",
        (chainId && isSupportedChainId(chainId)
          ? chainId
          : ChainId.SEPOLIA
        ).toString(),
      );
    return params;
  }, [chainId, searchParams]);

  const createQueryString = useCallback(
    (values: { name: string; value: string | null }[]) => {
      const params = new URLSearchParams(defaultedParams);
      values.forEach(({ name, value }) => {
        if (value === null) {
          params.delete(name);
        } else {
          params.set(name, value);
        }
      });
      return params.toString();
    },
    [defaultedParams],
  );
  // Update the URL with a new chainId
  const updateSearchParams = useCallback<{ (_chainId: number): void }>(
    (chainId) => {
      console.log("setChainId", chainId);
      push(
        `${pathname}?${createQueryString([
          { name: "chainId", value: chainId.toString() },
        ])}`,
        { scroll: false },
      );
    },
    [createQueryString, pathname, push],
  );
  useEffect(() => {
    if (loading) return;
    chainId && updateSearchParams(chainId); // Only call if chainId exists
    previousChainIdRef.current = chainId;
  }, [chainId, loading]);
}

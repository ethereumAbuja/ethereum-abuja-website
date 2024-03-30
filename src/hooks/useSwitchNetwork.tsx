import {
  ChainId,
  DONATION_TOKENS,
  isSupportedChainId,
} from "@/constants/config/chainId";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAccount, useSwitchAccount } from "wagmi";

export function useNetworkConnectorUpdater() {
  const { chainId } = useAccount();
  const previousChainIdRef = useRef(chainId);
  const { isPending: loading } = useSwitchAccount();

  const [donationToken, setDonationToken] = useState<string>(
    DONATION_TOKENS.USDT, // Default to first token
  );

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

    if (!params.has("donationtoken"))
      params.set("donationtoken", donationToken);

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

  const updateDonationTokenParam = useCallback<{
    (_donationToken: string): void;
  }>(
    (_donationToken) => {
      console.log("donationtoken", donationToken);
      push(
        `${pathname}?${createQueryString([
          { name: "donationtoken", value: _donationToken },
        ])}`,
        { scroll: false },
      );
      setDonationToken(_donationToken);
    },
    [createQueryString, pathname, push],
  );

  useEffect(() => {
    // const newDonationToken = searchParams.get("donationtoken");
    // if (newDonationToken !== donationToken) {
    //   newDonationToken && setDonationToken(newDonationToken);
    //   const params = new URLSearchParams(searchParams);
    //   newDonationToken && params.set("donationtoken", newDonationToken);
    // }

    if (loading) return;
    chainId && updateSearchParams(chainId); // Only call if chainId exists
    previousChainIdRef.current = chainId;
  }, [chainId, loading, searchParams, donationToken]);
}

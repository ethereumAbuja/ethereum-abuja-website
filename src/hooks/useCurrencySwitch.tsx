import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  ChainId,
  ChainKey,
  SUPPORT_CHAINID,
  DONATION_TOKENS,
} from "@/constants/config/chainId";
import { useCallbackRef } from "@chakra-ui/react";

export default function useDonationCurrency() {
  const { push } = useRouter();
  const [donationToken, setDonationToken] = useState(
    DONATION_TOKENS.USDT, // Default to first token
  );

  const createQueryString = useCallbackRef(
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

  // Update URL on donation token change
  useEffect(() => {
    const updateURL = async () => {
      const updatedPathname = window.location.pathname;
      const updatedSearch = new URLSearchParams({ donationToken });
      const updatedURL = `${updatedPathname}?${updatedSearch.toString()}`;
      navigate(updatedURL, { shallow: true }); // Update URL without full reload

      push(
        `${pathname}?${createQueryString([
          { name: "chainId", value: chainId.toString() },
        ])}`,
        { scroll: false },
      );
    };
    updateURL();
  }, [donationToken]);

  // Helper functions
  const getDonationTokenFromURL = (searchParams) => {
    const tokenFromURL = searchParams.get("donationToken");
    // Validate token from URL against enum values
    return Object.values(DONATION_TOKENS).includes(tokenFromURL)
      ? tokenFromURL
      : DONATION_TOKENS[0]; // Default to first token if invalid
  };

  const switchDonationToken = (newToken) => {
    // Validate new token against enum values before update
    if (Object.values(DONATION_TOKENS).includes(newToken)) {
      setDonationToken(newToken);
    } else {
      console.error("Invalid donation token:", newToken);
    }
  };

  return { donationToken, switchDonationToken };
}

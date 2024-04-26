import { useDispatch } from "react-redux";
import { setDonationToken } from "."; // Import your action creator
import { DonationToken } from "@/constants/contract-address/types";
import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AppDispatch } from "../store";
import { useAccount } from "wagmi";

export const useDonationToken = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();
  const { chainId } = useAccount();

  //update state in redux store
  const updateDonationTokenState = (newToken: DonationToken) => {
    dispatch(setDonationToken({ chainId, tokenTicker: newToken }));
  };

  // update search params to add "donation token"
  const createQueryString = useCallback(
    (values: { name: string; value: string | null }[]) => {
      const params = new URLSearchParams(searchParams);
      values.forEach(({ name, value }) => {
        if (value === null) {
          params.delete(name);
        } else {
          params.set(name, value);
        }
      });
      return params.toString();
    },
    [searchParams],
  );

  const updateDonationTokenOnUrl = useCallback<{
    (_donationToken: DonationToken): void;
  }>(
    (_donationToken) => {
      console.log("set_donationToken", _donationToken);
      push(
        `${pathname}?${createQueryString([
          { name: "donationtoken", value: _donationToken },
        ])}`,
        { scroll: false },
      );
    },
    [createQueryString, pathname, push],
  );

  const updateDonationToken = (newToken: DonationToken) => {
    updateDonationTokenState(newToken);
    updateDonationTokenOnUrl(newToken);
  };
  return updateDonationToken;
};

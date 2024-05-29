import { ChainId } from "@/constants/config/chainId";
import { getDonationTokenAddress } from "@/constants/contract-address";
import { DonationToken } from "@/constants/contract-address/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Address } from "viem";

type DonationTokenPayload = {
  tokenTicker: DonationToken;
  chainId?: number | undefined;
};
interface DonationTokenState {
  chainId: number;
  token: DonationToken;
  tokenAddress: Address;
}
const initialState: DonationTokenState = {
  chainId: ChainId.SEPOLIA,
  token: "USDT",
  tokenAddress: getDonationTokenAddress({
    chainId: ChainId.SEPOLIA,
    donationTokenTicker: "USDT",
  }),
};

export const DonationTokenSlice = createSlice({
  name: "donationToken",
  initialState,
  reducers: {
    setDonationToken: (state, action: PayloadAction<DonationTokenPayload>) => {
      state.token = action.payload.tokenTicker;
      const newDonationTokenAddress = getDonationTokenAddress({
        chainId: action.payload.chainId,
        donationTokenTicker: action.payload.tokenTicker,
      });

      state.tokenAddress = newDonationTokenAddress;
    },
  },
});

export const { setDonationToken } = DonationTokenSlice.actions;
export default DonationTokenSlice.reducer;

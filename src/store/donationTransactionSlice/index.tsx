import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { trxType } from "@/utils";
import { AxiosError } from "axios";
import { Sponsor } from "@prisma/client";

// types definistions
interface heroslistSlice {
  refetchHerosList: boolean;
  heroslist: Sponsor[];
  isLoading: boolean;
  isError: boolean;
  Error: AxiosError | null;
  isSuccess: boolean;
}
interface DonationTransactionState {
  DonationTokenBalance: number;
  DonationAmount: string;
  userCanDonate: boolean;
  OngoingTransactionType: trxType;
  heroslistSlice: heroslistSlice;
}

//intia states definitions
const initialHeroslistState: heroslistSlice = {
  refetchHerosList: false,
  heroslist: [],
  isLoading: false,
  isError: false,
  Error: null,
  isSuccess: false,
};
const initialState: DonationTransactionState = {
  DonationTokenBalance: 0,
  DonationAmount: "0.10",
  userCanDonate: false,
  OngoingTransactionType: trxType.UNKNOWN,
  heroslistSlice: initialHeroslistState,
};

export const DonationTransactionSlice = createSlice({
  name: "donationTransaction",
  initialState,
  reducers: {
    computeDonationTokenBalance: (state, action: PayloadAction<number>) => {
      state.DonationTokenBalance = state.DonationTokenBalance;
    },
    setDonationAmount: (state, action: PayloadAction<string>) => {
      state.DonationAmount = action.payload;
    },
    setDonationBalance: (state, action: PayloadAction<number>) => {
      state.DonationTokenBalance = action.payload;
    },
    setOngoingTrxType: (state, action: PayloadAction<trxType>) => {
      state.OngoingTransactionType = action.payload;
    },

    //HEROS LIST SLICE REDUCERS
    setHerosListLoading: (state, action: PayloadAction<boolean>) => {
      state.heroslistSlice.isLoading = action.payload;
    },
    setHerosListError: (state, action: PayloadAction<AxiosError>) => {
      if (action.payload == null) {
        return;
      }
      state.heroslistSlice.Error = action.payload;
      state.heroslistSlice.isError = true;
    },
    setHerosList: (state, action: PayloadAction<Sponsor[]>) => {
      state.heroslistSlice.heroslist = action.payload;
    },
    setReftchHerosList: (state, action: PayloadAction<boolean>) => {
      state.heroslistSlice.refetchHerosList = action.payload;
    },
  },
});

export const {
  setDonationBalance,
  setDonationAmount,
  computeDonationTokenBalance,
  setOngoingTrxType,
  setReftchHerosList,
  setHerosList,
} = DonationTransactionSlice.actions;
export default DonationTransactionSlice.reducer;

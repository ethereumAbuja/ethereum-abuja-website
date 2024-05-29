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
  OngoingTransactionType: trxType.UNKNOWN,
  heroslistSlice: initialHeroslistState,
};

export const DonationTransactionSlice = createSlice({
  name: "donationTransaction",
  initialState,
  reducers: {
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

export const { setOngoingTrxType, setReftchHerosList, setHerosList } =
  DonationTransactionSlice.actions;
export default DonationTransactionSlice.reducer;

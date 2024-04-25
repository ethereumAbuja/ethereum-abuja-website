import { combineReducers } from "redux";
import { ThemeSlice } from "./themeSlice";
import { EthAbujaApi } from "./ethAbujaApi";
import { DonationTokenSlice } from "./donationTokenSlice";
import { DonationTransactionSlice } from "./donationTransactionSlice";

export default combineReducers({
  themeReducer: ThemeSlice.reducer,
  [EthAbujaApi.reducerPath]: EthAbujaApi.reducer,
  donationTokenSlice: DonationTokenSlice.reducer,
  donationTransactionSlice: DonationTransactionSlice.reducer,
});

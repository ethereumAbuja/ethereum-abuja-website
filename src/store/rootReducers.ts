import { combineReducers } from "redux";
import { ThemeSlice } from "./themeSlice";
import { EthAbujaApi } from "./ethAbujaApi";
import { DonationTokenSlice } from "./donationTokenSlice";

export default combineReducers({
  themeReducer: ThemeSlice.reducer,
  [EthAbujaApi.reducerPath]: EthAbujaApi.reducer,
  donationTokenSlice: DonationTokenSlice.reducer,
});

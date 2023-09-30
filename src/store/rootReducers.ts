import { combineReducers } from "redux";
import { ThemeSlice } from "./themeSlice";
import { EthAbujaApi } from "./ethAbujaApi";

export default combineReducers({
  themeReducer: ThemeSlice.reducer,
  [EthAbujaApi.reducerPath]: EthAbujaApi.reducer,
});

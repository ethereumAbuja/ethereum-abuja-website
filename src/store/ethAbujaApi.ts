import { BASE_URL as baseUrl } from "@/utils/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { RootState } from "./store";

export const EthAbujaApi = createApi({
  reducerPath: "ethAbujaApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authReducer.token;
      if (token) {
        headers.set("Bearer", `${token}`);
      }
      return headers;
    },
  }),
  // extractRehydrationInfo(action, { reducerPath }) {
  //   if (action.type === HYDRATE) {
  //     return action.payload[reducerPath];'''
  //   }
  // },
  // tagTypes: [],
  endpoints: (builder) => ({}),
});

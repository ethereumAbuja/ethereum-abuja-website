import { BASE_URL as baseUrl } from "@/utils/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

export const EthAbujaApi = createApi({
  reducerPath: "ethAbujaApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      //@ts-ignore
      const token = (getState() as RootState).authReducer.app_jwt;
     
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
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

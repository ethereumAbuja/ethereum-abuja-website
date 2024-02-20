"use client";
import { persistor, store } from "@/store/store";
import type { FC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ProvidersProps } from "@/lib/components/types";
import Providers from "../Providers";

const RootProvider: FC<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Providers>{children}</Providers>
      </PersistGate>
    </Provider>
  );
};

export default RootProvider;

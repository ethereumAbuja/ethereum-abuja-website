"use client";

import ethAbj_theme from "@/constants/theme";
import { ProvidersProps } from "@/lib/components/types";
import { persistor, store } from "@/store/store";
import { ChakraProvider } from "@chakra-ui/react";
import type { FC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={ethAbj_theme} data-testid="chakra_prov">
          {children}
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;

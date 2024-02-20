"use client";

import { ReactNode } from "react";
import Head from "next/head";

import "./globals.css";
import { store } from "@/store/store";
import RootProvider from "@/components/RootProvider";

import { cookieToInitialState } from "wagmi";

// import { headers } from "next/headers";
import { config } from "@/constants/config";
import { Web3Modal } from "@/constants/context";

export default function RootLayout({ children }: { children: ReactNode }) {
  // const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <head />
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>
      <style jsx global>{`
        html {
          font-family: "Space Grotesk", sans-serif;
        }
      `}</style>
      <body>
        <RootProvider>
          <Web3Modal>
            <main>
              <div
                style={{
                  backgroundColor:
                    store.getState().themeReducer.appTheme
                      .backgroundColorGlobal,
                  minWidth: "100vw",
                  minHeight: "100vh",
                  color: store.getState().themeReducer.appTheme.textColor,
                }}
              >
                <main>{children}</main>
              </div>
            </main>
          </Web3Modal>
        </RootProvider>
      </body>
    </html>
  );
}

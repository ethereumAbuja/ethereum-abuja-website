"use client";

import { ReactNode } from "react";
import Head from "next/head";
import { Metadata, Viewport } from "next";
import "./globals.css";
import { store } from "@/store/store";
import {
  SITE_DESCRIPTION,
  SITE_INFO,
  SITE_NAME,
  SOCIAL_GITHUB,
  SOCIAL_TWITTER,
  SITE_URL,
} from "@/utils/site";
import RootProvider from "@/components/RootProvider";

import { cookieToInitialState } from "wagmi";

// import { headers } from "next/headers";
import { WALLETCONNECT_CONFIG } from "@/constants/config";
import { Web3Modal } from "@/constants/context";

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1.0,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // const initialState = cookieToInitialState(
  //   WALLETCONNECT_CONFIG,
  //   headers().get("cookie")
  // );

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

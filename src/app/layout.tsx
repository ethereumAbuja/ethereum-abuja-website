"use client";

import Providers from "@/components/Providers";
import { useAppSelector } from "@/hooks/rtkHooks";
import { useEffect, ReactNode, useRef } from "react";
import Head from "next/head";

import "./globals.css";
import { store } from "@/store/store";
import RootProvider from "@/components/RootProvider";

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
       <head />
      <Head>
          <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>
      <style jsx global>{`
        html {
          font-family: 'Space Grotesk', sans-serif;
        }
      `}</style>
      <body>
        <RootProvider>
          <main>
              <div
                style={{
                  backgroundColor: store.getState().themeReducer.appTheme.backgroundColorGlobal,
                  minWidth: "100vw",
                  minHeight: "100vh",
                  color: store.getState().themeReducer.appTheme.textColor,
                }}
              >
                <main>{children}</main>
              </div>
          </main>
        </RootProvider>
      </body>
    </html>
  );
}

"use client";

import Providers from "@/components/Providers";
import { useAppSelector } from "@/hooks/rtkHooks";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, ReactNode, useRef } from "react";
import { useWindowSize } from "rooks";
import localFont from "next/font/local";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Lottie from "lottie-react";
import mobile from '@/assets/json/mobile.json'

import "./globals.css";
import { store } from "@/store/store";
import RootProvider from "@/components/RootProvider";


export default function RootLayout({ children }: { children: ReactNode }) {
  const { innerWidth }: any = useWindowSize();

  // const [widthSize, setWidthSize] = useState(1440);

  const widthSizeRef = useRef(1440);

  useEffect(() => {
    widthSizeRef.current = innerWidth;
    // setWidthSize(innerWidth);
  }, [innerWidth]);

  return (
    <html lang="en">
       <head />
      <Head>
          <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>
      <style jsx global>{`
        html {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <body>
        <RootProvider>
          <main>
            {widthSizeRef.current < 850 ? (
              <div>
                <Flex w={"100%"} flexDir="column" px="5%">
                <Lottie animationData={mobile} style={{ height: 400 }} />
                  <Text fontSize={"20px"} textAlign="center">
                    Please open the page in a web browser.
                  </Text>
                </Flex>
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: store.getState().themeReducer.appTheme.backgroundColorGlobal,
                  minWidth: "100vw",
                  minHeight: "100vh",
                  color: store.getState().themeReducer.appTheme.textColor,
                }}
              >
                {/* <nav>
                  <NavBar />
                </nav> */}
                {/* )} */}

                <main>{children}</main>
              </div>
            )}
          </main>
        </RootProvider>
      </body>
    </html>
  );
}

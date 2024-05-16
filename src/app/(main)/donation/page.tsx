"use client";
import React, { useState } from "react";
import DonationUI from "./donationUI";
import { useNetworkConnectorUpdater } from "@/hooks/useSwitchNetwork";

export default async function About() {
  // const [donationToken, setDonationToken] = useState<string>(
  //   DONATION_TOKENS.USDT,
  // );
  useNetworkConnectorUpdater();

  return <DonationUI />;
}

"use client";
import React from "react";
import DonationUI from "./donationUI";
import { useNetworkConnectorUpdater } from "@/hooks/useSwitchNetwork";

export default async function About() {
  useNetworkConnectorUpdater();

  return <DonationUI />;
}

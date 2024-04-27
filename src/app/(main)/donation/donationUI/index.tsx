import React from "react";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import HeroSponsorPage from "./components/Hero";
import WallHeros from "./components/WallHeros";

const DonationDapp = () => {
  return (
    <Box py={"5%"}>
      <HeroSponsorPage />
      <WallHeros />
    </Box>
  );
};

export default DonationDapp;

import React from "react";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const HeroSponsorPage = dynamic(() => import("./components/Hero"), {
  ssr: false,
  // loading: () => (
  //   <Box>
  //     <Spinner size={"sm"} />
  //   </Box>
  // ),
});

const WallHeros = dynamic(() => import("./components/WallHeros"), {
  ssr: false,
  // loading: () => (
  //   <Box>
  //     <Spinner size={"sm"} />
  //   </Box>
  // ),
});

const DonationDapp = () => {
  return (
    <Box py={"5%"}>
      <HeroSponsorPage />
      <WallHeros />
    </Box>
  );
};

export default DonationDapp;

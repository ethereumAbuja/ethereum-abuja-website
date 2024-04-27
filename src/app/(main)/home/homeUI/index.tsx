"use client";

import { Flex, Box, Text, Spinner } from "@chakra-ui/react";
import { useAppSelector } from "@/hooks/rtkHooks";
import dynamic from "next/dynamic";
import Hero from "./components/hero";
import SectionTwo from "./components/sectionTwo";
import SectionFour from "./components/sectionFour";
import SectionFive from "./components/sectionFive";
import SectionSix from "./components/sectionSix";
import SectionSeven from "./components/sectionSeven";

type Props = {};

const HomeUI = ({ pipelineData }: any) => {
  const { appTheme } = useAppSelector((state) => state.themeReducer);

  return (
    <Box pb="6%">
      <Box pt={"1rem"} pb={["0", "13rem", "13rem"]}>
        <Hero />
      </Box>
      <SectionTwo />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </Box>
  );
};

export default HomeUI;

"use client";

import { Flex, Box, Text } from "@chakra-ui/react";
import { useAppSelector } from "@/hooks/rtkHooks";
import ContainerWrapper from "@/components/ContainerWrapper";
import { nanoid } from "@reduxjs/toolkit";
import Hero from "./components/hero";
import SectionTwo from "./components/sectionTwo";
import SectionFour from "./components/sectionFour";
import SectionFive from "./components/sectionFive";

type Props = {};

const HomeUI = ({ pipelineData }: any) => {
  const { appTheme } = useAppSelector((state) => state.themeReducer);

  return (
    <Box py=".5%">
      <ContainerWrapper>
        <Hero />
      </ContainerWrapper>
      <SectionTwo />
      <SectionFour />
      <SectionFive />
    </Box>
  );
};

export default HomeUI;

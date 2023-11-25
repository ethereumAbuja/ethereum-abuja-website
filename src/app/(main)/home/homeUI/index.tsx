"use client";

import { Flex, Box, Text, Spinner } from "@chakra-ui/react";
import { useAppSelector } from "@/hooks/rtkHooks";
import ContainerWrapper from "@/components/ContainerWrapper";
import { nanoid } from "@reduxjs/toolkit";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/hero"), {
  ssr: false,
  loading: () => (
    <Box>
      <Spinner size={"sm"} />
    </Box>
  ),
});

const SectionTwo = dynamic(() => import("./components/sectionTwo"), {
  ssr: false,
  loading: () => (
    <Box>
      <Spinner size={"sm"} />
    </Box>
  ),
});

const SectionFour = dynamic(() => import("./components/sectionFour"), {
  ssr: false,
  loading: () => (
    <Box>
      <Spinner size={"sm"} />
    </Box>
  ),
});

const SectionFive = dynamic(() => import("./components/sectionFive"), {
  ssr: false,
  loading: () => (
    <Box>
      <Spinner size={"sm"} />
    </Box>
  ),
});

const SectionSix = dynamic(() => import("./components/sectionSix"), {
  ssr: false,
  loading: () => (
    <Box>
      <Spinner size={"sm"} />
    </Box>
  ),
});

const SectionSeven = dynamic(() => import("./components/sectionSeven"), {
  ssr: false,
  loading: () => (
    <Box>
      <Spinner size={"sm"} />
    </Box>
  ),
});

type Props = {};

const HomeUI = ({ pipelineData }: any) => {
  const { appTheme } = useAppSelector((state) => state.themeReducer);

  return (
    <Box py="15%">
      {/* <ContainerWrapper> */}
      <Hero />
      <SectionTwo />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      {/* </ContainerWrapper> */}
    </Box>
  );
};

export default HomeUI;

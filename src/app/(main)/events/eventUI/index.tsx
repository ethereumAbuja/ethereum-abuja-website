"use client";

import {
  Stack,
  Flex,
  Grid,
  Box,
  Text,
  HStack,
  VStack,
  Heading,
  useTheme,
} from "@chakra-ui/react";
import ContainerWrapper from "@/components/ContainerWrapper";
import { useAppSelector } from "@/hooks/rtkHooks";
import Image from "next/image";
import Events from "./Events";
type Props = {};

const eventUI = ({ pipelineData }: any) => {
  // const { appTheme } = useAppSelector((state) => state.themeReducer);
  // const theme = useTheme();
  return (
    <Box>
      <Grid
        border="2px"
        width="100%"
        px="2rem"
        py="2rem"
        bgImage={[
          "/image/eventspage/headBanner.svg",
          "",
          "/image/eventspage/headBannerDesktop.svg",
        ]}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
      >
        <Box
          pos="relative"
          display={["none", "none", "inline-flex"]}
          width="470px"
          height="270px"
        >
          <Image
            src="/image/eventspage/eventsHeadIllustration.svg"
            alt="event illustration"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
        <VStack width="100%">
          <HStack
            justifyContent="space-between"
            width="100%"
            alignItems="center"
          >
            <Heading as="h3" color="white" fontWeight={600} noOfLines={1}>
              Events
            </Heading>
            <Box pos="relative" width="68px" height="64px">
              <Image
                src="/image/eventspage/cubeImage.svg"
                alt="A cube set illustration"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </HStack>
          <Text color="white">
            Keep track of our upcoming events, workshops, and meetups. Stay
            tuned for a vibrant schedule filled with opportunities for learning,
            networking and collaboration.
          </Text>
        </VStack>
      </Grid>

      <Box minHeight="10vh" px="2rem">
        <Events />
      </Box>
    </Box>
  );
};

export default eventUI;

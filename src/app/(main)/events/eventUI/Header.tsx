
"use client";

import React from 'react'
import {
  Grid,
  Box,
  Text,
  HStack,
  VStack,
  Heading,
  Flex
} from "@chakra-ui/react";
import Image from "next/image";
import { COLORS } from '@/constants/theme/lightDarkTheme';


export default function Header() {
  return (
    <div>
      <Grid
        border="1px"
        width="100%"
        px="2rem"
        py="2rem"
        bgImage={[
          "/image/eventspage/headBanner.svg",
          "",
          "/image/eventspage/headBannerDesktop.svg",
        ]}
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
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
            <Flex flexDir="column">
              <Heading as="h3"
                color={COLORS.white}
                fontFamily="Space Grotesk"
                fontWeight={600}
                fontSize="40px"
                noOfLines={1}
              >
                Events
              </Heading>
              <Text
                color={COLORS.white}
                fontSize="18px"
                lineHeight="165%"
                mt="20px"
              >
                Keep track of our upcoming events, workshops, and meetups. Stay
                tuned for a vibrant schedule filled with opportunities for learning,
                networking and collaboration.
              </Text>
            </Flex>

            <Box pos="relative" width="68px" height="64px">
              <Image
                src="/image/eventspage/cubeImage.svg"
                alt="A cube set illustration"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </HStack>
        </VStack>
      </Grid>
    </div>
  )
}

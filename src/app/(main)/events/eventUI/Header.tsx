"use client";

import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { COLORS } from "@/constants/theme/lightDarkTheme";
import ContainerWrapper from "@/components/ContainerWrapper";

export default function Header() {
  return (
    <Box pt={"5rem"}>
      <Box
        border="1px"
        width="100%"
        py="2rem"
        bgImage={[
          "/image/eventspage/headBanner.svg",
          "/image/eventspage/headBannerDesktop.svg",
        ]}
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
        alignItems="center"
      >
        <ContainerWrapper>
          <Flex justifyContent="space-between" width="100%" alignItems="center">
            <Box
              pos="relative"
              display={["none", "none", "inline-flex"]}
              width="100%"
              height="270px"
            >
              <Image
                src="/image/eventspage/eventsHeadIllustration.svg"
                alt="event illustration"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Flex flexDir="column">
              <Flex justify="space-between" alignItems="center">
                <Heading
                  as="h3"
                  color={COLORS.white}
                  fontFamily="Space Grotesk"
                  fontWeight={600}
                  fontSize={["33px", "33px", "33px", "40px"]}
                >
                  Events
                </Heading>
                <Box
                  pos="relative"
                  width="68px"
                  height="64px"
                  display={["block", "block", "none"]}
                >
                  <Image
                    src="/image/eventspage/cubeImage.svg"
                    alt="A cube set illustration"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Flex>

              <Text
                color={COLORS.white}
                fontSize="18px"
                lineHeight="165%"
                mt="20px"
              >
                Keep track of our upcoming events, workshops, and meetups. Stay
                tuned for a vibrant schedule filled with opportunities for
                learning, networking, and collaboration.
              </Text>
            </Flex>
          </Flex>
        </ContainerWrapper>
      </Box>
    </Box>
  );
}

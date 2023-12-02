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
          "/image/resourcepage/bg_mobile.svg",
          "/image/resourcepage/bg.png",
        ]}
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
        alignItems="center"
      >
        <ContainerWrapper>
          <Flex justifyContent="space-between" width="100%" alignItems="center">
            <Flex flexDir="column">
              <Flex justify="space-between" alignItems="center">
                <Heading
                  as="h3"
                  color={COLORS.white}
                  fontFamily="Space Grotesk"
                  fontWeight={600}
                  fontSize={["33px", "33px", "33px", "40px"]}
                >
                  Media, Guides & Resources
                </Heading>
                <Box
                  pos="relative"
                  width="68px"
                  height="64px"
                  display={["block", "block", "none"]}
                >
                  <Image
                    src="/image/resourcepage/blocks_mobile.svg"
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
                Find blogs, podcasts, tutorials, and more - a reservoir of
                resources to keep you updated and informed on the latest trends
                and developments in the Ethereum ecosystem.
              </Text>
            </Flex>

            <Box
              pos="relative"
              display={["none", "none", "inline-flex"]}
              width="100%"
              height="270px"
            >
              <Image
                src="/image/resourcepage/blocks.svg"
                alt="blocks illustration"
                fill
                style={{ objectFit: "contain", zIndex: 3, scale: 1.3 }}
              />
              <Image
                src="/image/resourcepage/fudgy.svg"
                alt="blocks illustration"
                fill
                style={{ objectFit: "contain", zIndex: 2 }}
              />
              <Image
                src="/image/resourcepage/triangle.svg"
                alt="blocks illustration"
                fill
                style={{ objectFit: "contain", zIndex: 1 }}
              />
            </Box>
          </Flex>
        </ContainerWrapper>
      </Box>
    </Box>
  );
}

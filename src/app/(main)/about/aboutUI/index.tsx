"use client";

import {
  Flex,
  Box,
  Text,
  Spacer,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import ContainerWrapper from "@/components/ContainerWrapper";
import { useAppSelector } from "@/hooks/rtkHooks";
import Image from "next/image";
import aboutcubeImg from "../../../../../public/image/aboutpage/eth-cube-img.png";
import cube from "../../../../../public/image/aboutpage/stack-cube.png";
import blackCube from "../../../../../public/image/aboutpage/black-cube.svg";
import greenCube from "../.././../../../public/image/aboutpage/green-stack-cube.png";
import greenCubeStyle from "../../../../../public/image/aboutpage/cube-box-style.png";
import { COLORS } from "@/constants/theme/lightDarkTheme";
import { JOIN_COM_URL } from "@/utils/config";

type Props = {};

const AboutUI = () => {
  const { appTheme } = useAppSelector((state) => state.themeReducer);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box pt={"5rem"}>
      <Flex
        width="100%"
        height="100vh"
        bgImage={["/image/aboutpage/meetup-image.png"]}
        position="relative"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Box
          zIndex="0"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="linear(to-b, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))"
        />
        <Flex flexDir="column" zIndex={1}>
          <Text
            fontSize={["40px", "40px", "64px"]}
            color="#FCFCFC"
            fontWeight={600}
          >
            About Us
          </Text>
          <Text
            color="#EAEAEA"
            fontSize={["16px", "", "18px"]}
            maxW={["300px", "", "800px"]}
          >
            We are crafting a web3 digital haven within the vast landscape of
            the internet where community contributions takes precedence.
          </Text>
        </Flex>
      </Flex>
      <Box>
        <Flex
          direction={["column", "column", "row"]}
          justify="space-between"
          pt={{ base: "20px", md: "70px" }}
          alignItems={["center", "", ""]}
          maxW={"1220px"}
          ml={"auto"}
          pl={["0", "0", "1rem"]}
        >
          <Flex
            flexDir="column"
            mb={{ base: "20px", md: "0" }}
            position="relative"
            pt={["80px", "80px", ""]}
          >
            {isMobile && (
              <Box position="absolute" top={1} right={-30}>
                <Image
                  src={greenCube}
                  width={100}
                  height={100}
                  alt="cube box"
                />
              </Box>
            )}
            <Text
              fontSize={["32px", "", "64px"]}
              fontWeight={600}
              // mt={["60px", "", ""]}
              textAlign={["center", "center", "left"]}
              mb={"8px"}
            >
              The mission
            </Text>
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              maxW={{ base: "100%", md: "800px" }}
              textAlign={["center", "left", "left"]}
            >
              We are a passionate community of builders, developers, and
              innovators dedicated to propelling the advancements of Ethereum
              and Layer 2 blockchains in Abuja and Northern Nigeria. Our mission
              is to bring together minds that are eager to shape the future of
              decentralized technology, right here in our vibrant region.
            </Text>
          </Flex>
          <Spacer />
          <Flex
            display={["flex", "flex", "flex"]}
            position="relative"
            // pb={["70px", "70px", "0px"]}
          >
            {isMobile ? (
              <Box position="absolute" left="-150px" right={0}>
                <Image
                  src={greenCubeStyle}
                  width={400}
                  height={400}
                  alt="cube box"
                />
              </Box>
            ) : (
              <Image
                src={aboutcubeImg}
                alt="cube img"
                width={1000}
                height={600}
              />
            )}
          </Flex>
        </Flex>

        <Flex
          mt={["", "70px", ""]}
          h={"800px"}
          justify="center"
          alignItems="center"
          textAlign="center"
          bgImage={["", "", "/image/aboutpage/cube-style.png"]}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          flexDir="column"
          position="relative"
        >
          {isMobile && (
            <Box position="absolute" left={"-90px"} top={60} right={0}>
              <Image src={cube} width={200} height={200} alt="cube box" />
            </Box>
          )}

          <Text
            color="#060606"
            fontFamily="Space Grotesk"
            fontSize={["72px", "92px", "150px", "248px"]}
            fontStyle="normal"
            fontWeight={800}
            letterSpacing="-4.96px"
            lineHeight="normal"
          >
            JOIN US
          </Text>

          <Link
            as={Link}
            bg="black"
            w={["144px", "", "160px"]}
            borderRadius={"8px"}
            color="white"
            cursor="pointer"
            p="14px 0"
            mt={["25px", "", "30px"]}
            border="0.5px solid #000"
            href={JOIN_COM_URL}
            target="_blank"
            rel="noopener noreferrer"
            position="relative"
            _hover={{
              bg: COLORS.joinComColorBTN,
              borderColor: "1px solid black",
              textDecor: "none",
            }}
          >
            Join Community
          </Link>

          {isMobile && (
            <Box position="absolute" bottom={"-90px"} right="-80px">
              <Image src={blackCube} alt="cube box" />
            </Box>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUI;

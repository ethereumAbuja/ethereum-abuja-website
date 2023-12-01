import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import { COLORS } from "@/constants/theme/lightDarkTheme";
import { JOIN_COM_URL } from "@/utils/config";

const SectionTwo = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Box
        bgColor={"black"}
        bgImage="/image/desktop-dark-blue.svg"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
        py={"7rem"}
      >
        <Box maxW={"1140px"} mx={"auto"} px={".5rem"}>
          <Flex
            flexDir={["column-reverse", "column-reverse", "row"]}
            justify="space-between"
            alignItems="center"
          >
            <Flex
              flexDir={"column"}
              alignItems={["center", "center", "start"]}
              textAlign={["center", "center", "start"]}
            >
              <Text
                color={"#FCFCFC"}
                fontSize={["32px", "32px", "64px"]}
                fontWeight={"600"}
                lineHeight={"120%"}
                mt={["40px", "40px", "0px"]}
              >
                Building the Future, Together
              </Text>
              <Text
                color={"#EAEAEA"}
                fontSize={["14px", "14px", "16px"]}
                fontWeight={500}
                lineHeight={"165%"}
                mt={["16px", "16px", "0px"]}
              >
                We are a passionate community of builders, developers, and
                innovators dedicated to propelling the advancements of Ethereum
                and Layer 2 blockchains in Abuja and Northern Nigeria. Our
                mission is to bring together minds that are eager to shape the
                future of decentralized technology, right here in our vibrant
                region.
              </Text>

              <Button
                mt="40px"
                as="a"
                href={JOIN_COM_URL}
                target="_blank"
                bg={COLORS.joinComColorBTN}
                w={["160px", "", "160px"]}
                h="50px"
                p="20px"
                border="0.5px solid #000"
                borderRadius={"8px"}
                color="white"
                fontWeight={400}
                _hover={{
                  bg: COLORS.joinComColorBTN,
                  borderColor: "1px solid black",
                }}
              >
                Join Community
              </Button>
            </Flex>

            <Box display={["none", "none", "flex"]}>
              <Image
                w={"100%"}
                src={"/image/Section 2 ETH with screen asset.png"}
                alt="image"
              />
            </Box>

            <Box display={["flex", "flex", "none"]}>
              {isMobile && (
                <Image
                  w={["350px", "350px", "100%"]}
                  src={"/image/eth-assets-mobile.svg"}
                  alt="image"
                />
              )}
            </Box>
          </Flex>
        </Box>
      </Box>
      <Image
        src="/image/Section 2.5 - community initiative stripe.png"
        alt="image"
      />
    </Box>
  );
};

export default SectionTwo;

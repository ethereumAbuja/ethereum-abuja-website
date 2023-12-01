import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  useBreakpointValue,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import { COLORS } from "@/constants/theme/lightDarkTheme";
import { ETHABJ_SVG2 } from "@/assets/svg/svgFile2";
import { JOIN_COM_URL } from "@/utils/config";

const SectionSix = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Box py={"5rem"}>
        <ContainerWrapper>
          <Flex
            flexDir={["column", "column", "row"]}
            justify="center"
            alignItems="center"
            gap={["0", "0", "32px"]}
          >
            <Flex
              flexDir={"column"}
              alignItems={["center", "center", "start"]}
              textAlign={["center", "center", "start"]}
              gap={["0", "0", "32px"]}
            >
              <Text
                fontSize="20px"
                fontWeight={600}
                mb={["16px", "16px", ""]}
                display={["flex", "flex", "none"]}
                textAlign={["center", "center", "start"]}
              >
                Join us
              </Text>
              <Flex justify="space-between" position="relative">
                <Text
                  fontSize={["32px", "32px", "40px"]}
                  fontWeight={"600"}
                  lineHeight={["38.4px", "38.4px", "64px"]}
                  maxW="500px"
                  //   mt={["40px", "40px", "0px"]}
                >
                  Become a Part of the Revolution
                </Text>

                <Box
                  position="absolute"
                  top={"-45px"}
                  right={"-45px"}
                  display={["none", "none", "none", "flex"]}
                >
                  {ETHABJ_SVG2().joinusStyleSvg()}
                </Box>
              </Flex>

              <Text
                color={"#1D2E32"}
                fontSize={["14px", "16px", "18px"]}
                fontWeight={400}
                lineHeight={"29.7px"}
                maxWidth={["300px", "500px", "550px"]}
                textAlign={["center", "center", "start"]}
                mt={["20px", "20px", "0"]}
              >
                Get in touch with us to learn more about our initiatives and how
                you can get involved. Connect with us through social media or
                join our community forum to start engaging with fellow
                enthusiasts.
              </Text>
            </Flex>

            <Box flexDir="column" mt={["40px", "40px", "0px"]}>
              <Text
                fontSize="20px"
                fontWeight={600}
                mb="40px"
                display={["none", "non", "flex"]}
              >
                Join us
              </Text>
              <FormControl>
                <FormLabel htmlFor="example" fontSize="14px" mb="8px">
                  Full Name
                </FormLabel>
                <Input
                  type="text"
                  name=""
                  placeholder="John Doe"
                  w={["300px", "300px", "400px"]}
                  border="1px solid black"
                  borderRadius="8px"
                  _focus={{
                    border: "1px solid black",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  _placeholder={{
                    color: "#C6C6C6",
                  }}
                />
              </FormControl>

              <FormControl mt="32px">
                <FormLabel htmlFor="example" fontSize="14px" mb="8px">
                  E-mail address
                </FormLabel>
                <Input
                  type="text"
                  name=""
                  placeholder="example@yourmail.com"
                  w={["300px", "300px", "400px"]}
                  border="1px solid black"
                  borderRadius="8px"
                  _focus={{
                    border: "1px solid black",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  _placeholder={{
                    color: "#C6C6C6",
                  }}
                />
              </FormControl>

              <Button
                mt="40px"
                as="a"
                href={JOIN_COM_URL}
                target="_blank"
                bg="#060606"
                w="100%"
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
            </Box>

            {/* <Box display={["flex", "flex", "none"]}>
              {isMobile && (
                <Image
                  w={["350px", "350px", "100%"]}
                  src={"/image/eth-assets-mobile.svg"}
                  alt="image"
                />
              )}
            </Box> */}
          </Flex>
        </ContainerWrapper>
      </Box>
    </Box>
  );
};

export default SectionSix;

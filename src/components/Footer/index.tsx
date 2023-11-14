"use client";

import {
  Box,
  chakra,
  Tag,
  Flex,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorModeValue,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import ContainerWrapper from "../ContainerWrapper";
import { useAppSelector } from "@/hooks/rtkHooks";
import { ETHABJ_SVG } from "@/assets/svg";

export default function Footer() {
  const { appTheme } = useAppSelector((state) => state.themeReducer);

  const currentYear = new Date().getFullYear();

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg={appTheme.backgroundColor}>
      <ContainerWrapper padding={5} py={10}>
        <Flex
          justifyContent="center"
          alignItems={["", "", "center", "center"]}
          flexDir="column"
          gap={["1rem", "1rem", "0", "0"]}
        >
          <Stack>
            <Flex flexDir="column" alignItems="center">
              <Box display={["block", "block", "none", "none"]}>
                {ETHABJ_SVG().footerethicon()}
              </Box>
              <Text fontSize="18px" fontWeight={600} m="16px">
                Subscribe to our newsletter
              </Text>
              <InputGroup
                h="49px"
                border="1px solid #4662AA"
                borderRadius="8px"
                boxShadow="-2px 2px 14px 0px rgba(82, 82, 82, 0.06)"
              >
                <Input
                  placeholder="example@yourmail.com"
                  _focus={{
                    outline: "1px solid transparent",
                    outlineOffset: "2px",
                    boxShadow: "none",
                    border: "1.5px solid #4662AA",
                  }}
                  w={["100%", "100%", "400px", "400px"]}
                  _placeholder={{
                    color: "#C6C6C6",
                  }}
                  height="100%"
                />
                <InputRightElement h="48px">
                  <IconButton
                    bg={appTheme.backgroundColorReverse}
                    borderRadius="0px 5px 5px 0px"
                    color="white"
                    _hover={{
                      bg: `${appTheme.backgroundColorReverse}`,
                    }}
                    aria-label="Subscribe"
                    icon={<BiRightArrowAlt />}
                    height="100%"
                  />
                </InputRightElement>
              </InputGroup>
            </Flex>
          </Stack>

          <Stack mt="100px">
            <Flex flexDir="column" alignItems="center">
              <Box>{ETHABJ_SVG().footerLogo()}</Box>

              <HStack mt="24px" spacing={"12px"}>
                <Box as="a" href={"/about"}>
                  About Us
                </Box>
                <Box as="a" href={"/community"}>
                  Community
                </Box>
                <Box as="a" href={"/events"}>
                  Events
                </Box>
                <Box as="a" href={"/guides"}>
                  Resources
                </Box>
              </HStack>

              <HStack mt="24px" spacing={["20px", "20px", "0", "0"]}>
                <Box as="a" href={"/#"}>
                  {ETHABJ_SVG().twitterIcon()}
                </Box>
                <Box as="a" href={"/#"}>
                  {ETHABJ_SVG().mediumIcon()}
                </Box>
                <Box as="a" href={"/#"}>
                  {ETHABJ_SVG().githubIcon()}
                </Box>
                <Box as="a" href={"/#"}>
                  {ETHABJ_SVG().discordIcon()}
                </Box>
              </HStack>

              <Text
                display={["none", "none", "block", "block"]}
                fontSize={"sm"}
                mt="24px"
              >
                © {currentYear} ETHAbuja. All rights reserved
              </Text>
              <Text
                color={"#060606"}
                display={["block", "block", "none", "none"]}
                fontSize={"14px"}
                fontWeight={"500"}
                textAlign={"center"}
                lineHeight={"23.1px"}
                mt="24px"
              >
                Made with ❤️
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </ContainerWrapper>
    </Box>
  );
}

// export default Footer

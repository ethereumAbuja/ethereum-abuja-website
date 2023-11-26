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

const SectionSix = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Box pt={"5rem"} mb={["30px", "30px", "-120px"]} id="scroll-target">
        <Box>
          <Flex
            flexDir={["column-reverse", "column-reverse", "row"]}
            justify="space-between"
            alignItems="center"
            gap={["0", "130px", "130px"]}
          >
            <Flex
              flexDir={"column"}
              alignItems={["center", "center", "start"]}
              textAlign={["center", "center", "start"]}
              maxW={"1140px"}
              mx={"auto"}
              px={".5rem"}
            >
              <Text
                fontSize={["14px", "16px", "24px"]}
                fontWeight={500}
                lineHeight={["29.7px", "39.6px", "39.6px"]}
                maxWidth={["350px", "500px", "500px"]}
                textAlign={["center", "center", "start"]}
                mt={["20px", "20px", "0px"]}
                letterSpacing={"0.24px"}
              >
                Contribute to web3abuja.eth and ignite the spark of blockchain
                revolution in Abuja and Northern Nigeria
              </Text>

              <Button
                mt="24px"
                as="a"
                href="https://chat.whatsapp.com/FcsSrUumLY0IdBUcsXqcQi"
                target="_blank"
                bg="black"
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

            <Box>
              <Image
                w={["700px", "700px", "500px"]}
                src={"/image/newsletter-section.png"}
                alt="image"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionSix;

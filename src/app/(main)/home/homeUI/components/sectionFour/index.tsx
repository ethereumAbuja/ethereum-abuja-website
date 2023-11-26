import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ETHABJ_SVG } from "@/assets/svg";
import { builders } from "@/utils/dummyJSON";

const SectionFour = () => {
  return (
    <Box py={"137.5px"}>
      <Box maxW={"1140px"} mx={"auto"} px={".5rem"}>
        <Flex
          flexDir={"column"}
          alignItems={["", "flex-start", "flex-start"]}
          gap={"8px"}
          mb={"32px"}
          textAlign={["center", "left", "left"]}
        >
          <Text
            color={"#1D2E32"}
            fontSize={"20px"}
            fontWeight={"600"}
            lineHeight={"24px"}
          >
            Join us
          </Text>
          <Text
            color={"#060606"}
            fontSize={["32px", "32px", "40px"]}
            fontWeight={"600"}
            lineHeight={["38.4px", "38.4px", "64px"]}
          >
            Become a Builder
          </Text>
        </Flex>
        <SimpleGrid columns={[1, 2, 3, 3, 3]} gap="30px" width="100%">
          {builders.map((builder, index) => (
            <Flex
              key={index}
              w={"100%"}
              h="100%"
              pt={"30px"}
              flexDir={"column"}
              alignItems="flex-end"
              justify="space-between"
              gap="98px"
              borderRadius={"8px"}
              border={"1.5px solid black"}
            >
              <Flex
                flexDir={"column"}
                alignItems={"flex-start"}
                gap={"20px"}
                px={"20px"}
              >
                <Text
                  color={"#060606"}
                  fontSize={"24px"}
                  fontWeight={"600"}
                  lineHeight={"120%"}
                >
                  {builder.title}
                </Text>
                <Text
                  color={"#3A3A3A"}
                  fontSize={"16px"}
                  fontWeight={"500"}
                  lineHeight={"165%"}
                >
                  {builder.desc}
                </Text>
              </Flex>

              <Link
                href="https://chat.whatsapp.com/FcsSrUumLY0IdBUcsXqcQi"
                target="_blank"
                display={"flex"}
                h={"56px"}
                w={"100%"}
                py={"15px"}
                px={"20px"}
                _hover={{ textDecor: "none" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                bg={"#F6E6C7"}
                borderBottomRadius={"8px"}
              >
                <Text
                  color={"#060606"}
                  fontSize={"16px"}
                  fontWeight={"600"}
                  lineHeight={"26.4px"}
                >
                  Join Community
                </Text>
                <Box>{ETHABJ_SVG().arrowRightIcon2()}</Box>
              </Link>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SectionFour;

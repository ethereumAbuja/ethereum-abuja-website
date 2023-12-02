import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";

import image1 from "/public/web3bridge.png";
import image2 from "/public/ayahqhorizontal.png";

const SectionFive = () => {
  const partners = [
    {
      partnerimage: image2,
      partnername: "Aya",
      partnerwebsite: "https://www.ayahq.com/",
    },
    {
      partnerimage: image1,
      partnername: "Web3bridge",
      partnerwebsite: "https://www.web3bridge.com/",
    },
  ];

  return (
    <Box py={"45px"}>
      <Flex maxW={"1140px"} mx={"auto"} px={".5rem"} flexDir="column">
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
            Partners
          </Text>
          <Text
            color={"#060606"}
            fontSize={["32px", "32px", "40px"]}
            fontWeight={"600"}
            lineHeight={["38.4px", "38.4px", "64px"]}
          >
            Our Ecosystem Partners
          </Text>
        </Flex>
        <Flex
          gap={"24px"}
          justifyContent={"center"}
          flexDir={["column", "column", "row"]}
          alignItems="center"
        >
          {partners.map((e) => (
            <Flex
              key={nanoid()}
              w={"298px"}
              h="280px"
              flexDir={"column"}
              alignItems={"center"}
              gap={"32px"}
              pt={"70px"}
              pb={"71px"}
              pr={"66px"}
              pl={"67px"}
              borderRadius={"8px"}
              border={"1.5px solid #C6C6C6"}
              as="a"
              href={e.partnerwebsite}
              cursor="pointer"
              target="_blank"
            >
              <Image
                width={400}
                height={400}
                src={e.partnerimage}
                alt="partner logo"
              />
              <Text
                color={"#1D2E32"}
                fontSize={"16px"}
                fontWeight={"600"}
                lineHeight={"120%"}
              >
                {e.partnername}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default SectionFive;

import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import sponsorNames from "./data";

const WallHeros = () => {
  const backgroundColors = [
    "#FFFFFF",
    "#000000",
    "#0400DE",
    "#FF5733",
    "#66FF66",
  ];
  const textColors = ["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000"];

  return (
    <>
      <Box pt="5%">
        <Text textAlign="center">WALL OF HEROES (Sponsors) 🧑‍🚒</Text>
      </Box>
      <Marquee pauseOnHover direction="right" speed={100}>
        {sponsorNames.map((name, index) => (
          <Box
            key={index}
            px="20px"
            py="15px"
            m="5px"
            bg={backgroundColors[index % backgroundColors.length]}
            color={textColors[index % textColors.length]}
          >
            <Text>{name}</Text>
          </Box>
        ))}
      </Marquee>
      <Marquee pauseOnHover direction="left" speed={100}>
        {sponsorNames.map((name, index) => (
          <Box
            key={index}
            px="20px"
            py="15px"
            mx="5px"
            bg={backgroundColors[index % backgroundColors.length]}
            color={textColors[index % textColors.length]}
          >
            <Text>{name}</Text>
          </Box>
        ))}
      </Marquee>
    </>
  );
};

export default WallHeros;

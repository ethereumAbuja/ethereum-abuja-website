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

  const namesPerMarquee = 20;

  const marqueesData = Array.from(
    { length: Math.ceil(sponsorNames.length / namesPerMarquee) },
    (_, index) =>
      sponsorNames.slice(index * namesPerMarquee, (index + 1) * namesPerMarquee)
  );

  return (
    <>
      <Box pt="5%" mb="4rem">
        <Text textAlign="center">WALL OF HEROES (Sponsors) 🧑‍🚒</Text>
      </Box>

      {marqueesData.map((marqueeNames, marqueeIndex) => (
        <Marquee
          key={marqueeIndex}
          direction={marqueeIndex % 2 === 0 ? "right" : "left"}
          speed={100}
        >
          {marqueeNames.map((name, nameIndex) => (
            <Box
              key={nameIndex}
              px="25px"
              py="7px"
              m="5px"
              bg={
                nameIndex % 3 === 0
                  ? backgroundColors[nameIndex % backgroundColors.length]
                  : undefined
              }
              color={
                nameIndex % 3 === 2
                  ? "#000000"
                  : textColors[nameIndex % textColors.length]
              }
              borderRadius={nameIndex % 3 === 0 ? "3xl" : undefined}
              border={
                nameIndex % 3 === 1
                  ? "1px solid black"
                  : nameIndex % 3 === 2
                  ? undefined
                  : undefined
              }
            >
              <Text fontWeight="500">{name}</Text>
            </Box>
          ))}
        </Marquee>
      ))}
    </>
  );
};

export default WallHeros;

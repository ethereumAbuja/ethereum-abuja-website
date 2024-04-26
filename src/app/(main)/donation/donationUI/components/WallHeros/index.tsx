"use client";
import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import sponsorNames from "./data";
import axios from "axios";

const backgroundColors = [
  "#0400DE",
  "#FF5733",
  "#66FF66",
  "#DFFF5F",
  "#6CFF69",
  "#92E7FA",
  "#FFE037",
  "#22DC83",
  "#FF2A2A",
  "#FFB21D",
  "#F52762",
  "#000000",
  "#FFFFFF",
];

const textColors = [
  "#FFFFFF",
  "#FFFFFF",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#FFFFFF",
  "#FFFFFF",
];

const backgroundImages = [
  "url('image/svgviewer-waves.svg')",
  "url('image/svgviewer-output.svg')",
  "url('image/svgviewer-output2.svg')",
];

const namesPerMarquee = 20;

const WallHeros = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);
  const [heroslist, setHeroslist] = useState<any[]>([]);

  const getheros = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/getallsponsors");
      if (response.status === 201) {
        console.log("heros list", response.data);
        setHeroslist(response.data);
        console.log("heros list from  state", heroslist);
      } else {
        console.log("succesfully called api, error occured");
        setError(new Error("Failed to add sponsor"));
      }
    } catch (error) {
      console.log("succesfully called api, error occured");
      console.error(error);
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getheros();
  });

  const marqueesData = Array.from(
    { length: Math.ceil(heroslist.length / namesPerMarquee) },
    (_, index) =>
      heroslist.slice(index * namesPerMarquee, (index + 1) * namesPerMarquee),
  );

  return (
    <>
      <Box pt="5%" mb="3rem">
        <Text textAlign="center">WALL OF HEROES (Sponsors) 🧑‍🚒</Text>
      </Box>
      {heroslist.length === 0 || isLoading ? (
        <Box
          bgImage={"url('image/Wall-of-sponsor.png')"}
          textAlign="center"
          // border="1px solid red"
          py="5rem"
          bgSize="cover"
        >
          <Text fontSize="1rem" fontWeight={700} letterSpacing="0.16px">
            Be one of the folks who helped us grow
          </Text>
        </Box>
      ) : (
        <Box bgGradient="linear(to-b, #B125B400, #B125B41A)" py="1.5rem">
          {marqueesData.map((marqueeNames, marqueeIndex) => (
            <Marquee
              key={marqueeIndex}
              direction={marqueeIndex % 2 === 0 ? "right" : "left"}
              speed={80}
            >
              {marqueeNames.map((name, nameIndex) => (
                <Box
                  key={nameIndex}
                  px="25px"
                  py="5px"
                  m="5px"
                  bg={
                    nameIndex % 3 === 0
                      ? backgroundColors[nameIndex % backgroundColors.length]
                      : undefined
                  }
                  bgImage={
                    nameIndex % 3 === 2
                      ? backgroundImages[nameIndex % backgroundImages.length]
                      : undefined
                  }
                  backgroundSize={nameIndex % 3 === 2 ? "cover" : undefined}
                  color={
                    nameIndex % 3 === 1
                      ? "#000000"
                      : nameIndex % 3 === 2
                      ? "#000000"
                      : textColors[nameIndex % textColors.length]
                  }
                  borderRadius={
                    nameIndex % 3 === 1
                      ? "md"
                      : nameIndex % 3 === 0
                      ? "3xl"
                      : undefined
                  }
                  border={
                    nameIndex % 3 === 1
                      ? "1px solid #0400DE"
                      : nameIndex % 3 === 2
                      ? undefined
                      : undefined
                  }
                >
                  <Text fontWeight="500" fontSize="0.9rem">
                    {name.name}
                  </Text>
                </Box>
              ))}
            </Marquee>
          ))}
        </Box>
      )}
    </>
  );
};

export default WallHeros;

"use client";
import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { useAppSelector } from "@/hooks/rtkHooks";
import { RootState } from "@/store/store";
import { useHerosList } from "@/hooks/useHerosList";

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
  // refetchHerosList is updated in the donation modal each time a donation occurs where the sponsor decided to add name
  const refetchHerosList = useAppSelector(
    (state: RootState) =>
      state.donationTransactionSlice?.heroslistSlice?.refetchHerosList
  );

  const { data: heroslist, isLoading, fetchHerosList } = useHerosList();

  //fetch when list is empty or null
  useEffect(() => {
    const fetchData = async () => {
      // console.log("this is heros List", heroslist, heroslist?.length);
      if (heroslist?.length === null || heroslist?.length == 0) {
        await fetchHerosList();
        // console.log("this is heros List", heroslist, heroslist?.length);
      } else if (heroslist) {
        return;
      }
    };

    fetchData();
  });

  //refetch from api when "refetchHerosList" is true and when list has been fetch previously
  useEffect(() => {
    const fetchData = async () => {
      if (heroslist?.length !== 0 && refetchHerosList) {
        await fetchHerosList();
      } else if (heroslist) {
        return;
      }
    };
    fetchData();
  }, [refetchHerosList]);

  const marqueesData = Array.from(
    { length: Math.ceil(heroslist?.length / namesPerMarquee) },
    (_, index) =>
      heroslist.slice(index * namesPerMarquee, (index + 1) * namesPerMarquee)
  );

  return (
    <>
      <Box pt="5%" mb="3rem">
        <Text textAlign="center">WALL OF HEROES (Sponsors) 🧑‍🚒</Text>
      </Box>
      {heroslist?.length === 0 || isLoading ? (
        <Box
          bgImage={"url('image/Wall-of-sponsor.png')"}
          textAlign="center"
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

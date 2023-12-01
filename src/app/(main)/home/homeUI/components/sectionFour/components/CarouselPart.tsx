"use client";

import React from "react";
import { Flex, Text, Button, Image, Box } from "@chakra-ui/react";
import { COLORS } from "@/constants/theme/lightDarkTheme";
import { JOIN_COM_URL } from "@/utils/config";

const CarouselPart = () => {
  return (
    <Box pos={"relative"}>
      <Flex
        border=" 1.5px solid"
        bgColor="#FFF9D7"
        w="100%"
        height="600px"
        borderRadius="16px"
        p="20px 40px"
        justify="space-between"
        alignItems="center"
        position="relative"
        zIndex="2"
        // zIndex={5000}
      >
        <Flex flexDir="column">
          <Text
            fontSize="40px"
            fontWeight={600}
            lineHeight="160%"
            color="#060606"
          >
            Physical Meetups
          </Text>
          <Text color="#1D2E32" fontSize="20px" lineHeight="120%">
            Connect, Collaborate, and Create
          </Text>
          <Text
            mt="32px"
            fontSize="18px"
            color="#3A3A3A"
            lineHeight="165%"
            maxWidth="500px"
          >
            Join our regular meetups to network with like-minded individuals,
            share insights, and foster collaborations that can redefine the
            digital landscape.
          </Text>

          <Button
            mt="40px"
            as="a"
            href={JOIN_COM_URL}
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
            src={"/image/physical-meetup-img.png"}
            alt="image"
            border="1px solid #314D53"
            borderRadius="12px"
          />
        </Box>
      </Flex>

      {/* --------------------------- image 2 ------------------------------- */}
      <Flex
        border="1.5px solid"
        bgColor="#E2FFE1"
        w="100%"
        height="600px"
        borderRadius="16px"
        p="20px 40px"
        justify="space-between"
        alignItems="center"
        position="absolute"
        top="3"
        left="0"
        zIndex="1"
      >
        <Flex flexDir="column">
          <Text
            fontSize="40px"
            fontWeight={600}
            lineHeight="160%"
            color="#060606"
          >
            Community Workshops
          </Text>
          <Text color="#1D2E32" fontSize="20px" lineHeight="120%">
            Learning Today, Leading Tomorrow
          </Text>
          <Text
            mt="32px"
            fontSize="18px"
            color="#3A3A3A"
            lineHeight="165%"
            maxWidth="500px"
          >
            Immerse yourself in our interactive workshops where experts and
            novices alike come together to learn, share, and grow. From coding
            bootcamps to deep dives into the world of decentralized finance,
            there’s something for everyone.
          </Text>

          <Button
            mt="40px"
            as="a"
            href={JOIN_COM_URL}
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
            src={"/image/community-meetup-img.png"}
            alt="image"
            border="1px solid #314D53"
            borderRadius="12px"
          />
        </Box>
      </Flex>

      {/* --------------------------- image 3 ------------------------------- */}
      <Flex
        border=" 1.5px solid"
        bgColor="#E9FAFE"
        w="100%"
        height="600px"
        borderRadius="16px"
        p="20px 40px"
        justify="space-between"
        alignItems="center"
        position="absolute"
        top="6px"
        left="0"
        zIndex="-1"
      >
        <Flex flexDir="column">
          <Text
            fontSize="40px"
            fontWeight={600}
            lineHeight="160%"
            color="#060606"
          >
            Project Showcases
          </Text>
          <Text color="#1D2E32" fontSize="20px" lineHeight="120%">
            Showcasing Ingenuity
          </Text>
          <Text
            mt="32px"
            fontSize="18px"
            color="#3A3A3A"
            lineHeight="165%"
            maxWidth="500px"
          >
            Be a part of our project showcases where members get a platform to
            present their innovative solutions, receive feedback, and connect
            with potential collaborators and investors.
          </Text>

          <Button
            mt="40px"
            as="a"
            href={JOIN_COM_URL}
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
            src={"/image/project-meetup-img.png"}
            alt="image"
            border="1px solid #314D53"
            borderRadius="12px"
          />
        </Box>
      </Flex>

      {/* --------------------------- image 4 ------------------------------- */}
      <Flex
        border=" 1.5px solid"
        bgColor="#FFF9D7"
        w="100%"
        height="600px"
        borderRadius="16px"
        p="20px 40px"
        justify="space-between"
        alignItems="center"
        position="absolute"
        top="8"
        left="0"
        zIndex="-1"
      >
        <Flex flexDir="column">
          <Text
            fontSize="40px"
            fontWeight={600}
            lineHeight="160%"
            color="#060606"
          >
            Community Contributions
          </Text>
          <Text color="#1D2E32" fontSize="20px" lineHeight="120%">
            Building a Legacy, Together
          </Text>
          <Text
            mt="32px"
            fontSize="18px"
            color="#3A3A3A"
            lineHeight="165%"
            maxWidth="500px"
          >
            Every contribution, big or small, propels our community forward.
            Learn how you can contribute to web3abuja.eth and be a part of a
            movement that's fostering innovation and growth in the blockchain
            sphere.
          </Text>

          <Button
            mt="40px"
            as="a"
            href={JOIN_COM_URL}
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
            src={"/image/community-con-meetup-img.png"}
            alt="image"
            border="1px solid #314D53"
            borderRadius="12px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CarouselPart;

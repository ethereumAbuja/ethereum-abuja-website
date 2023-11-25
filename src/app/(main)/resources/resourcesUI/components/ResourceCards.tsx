import { Box, Flex, HStack, Text, GridItem, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import moment from "moment";
import { ETHABJ_SVG } from "@/assets/svg";
import { ResourceList } from "@/utils/Resources";

type CardImgUrl = Record<string, string>;

const cardImgUrl: CardImgUrl = {
  talks: "/image/resourcePage/talks.svg",
  tutorials: "/image/resourcePage/tutorials.svg",
  blogs: "/image/resourcePage/blogs.svg",
};

export default function ResourceCard({
  resourceType,
  title,
  dateUnix,
}: ResourceList) {
  return (
    <VStack
      justifyContent="space-between"
      border="2px"
      borderRadius="md"
      gap="0"
    >
      <Box pos="relative" width="100%" height="200px">
        <Image
          src={
            resourceType === "Talks"
              ? cardImgUrl.talks
              : resourceType === "Tutorials"
              ? cardImgUrl.tutorials
              : cardImgUrl.blogs
          }
          alt="An illustration of resource type"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box p="1rem" width="100%">
        <Text my="1rem" fontWeight="semibold" fontSize="20px">
          {title}
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <HStack>
            <Text my="1rem">{moment.unix(dateUnix).format("MMM")}</Text>
            <Text my="1rem">{moment.unix(dateUnix).format("D")},</Text>
            <Text my="1rem">{moment.unix(dateUnix).format("YYYY")}</Text>
          </HStack>
          <Text
            border="2px"
            px="8px"
            py="3px"
            fontSize="11px"
            background="#BBB5DE"
            borderColor="black"
            borderRadius="xl"
            textTransform="uppercase"
            height="fit-content"
          >
            {resourceType}
          </Text>
        </Flex>
      </Box>

      <HStack width="100%" p="1rem" bg="#F6E6C7" justifyContent="space-between">
        <Text>Open</Text>
        {ETHABJ_SVG().arrowRightIcon2()}
      </HStack>
    </VStack>
  );
}

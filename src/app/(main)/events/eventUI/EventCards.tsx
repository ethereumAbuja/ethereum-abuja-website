import { Box, Flex, HStack, Text, GridItem, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { LocationType, EventType } from ".";
import moment from "moment";
import { ETHABJ_SVG } from "@/assets/svg";

type CardImgUrl = Record<string, string>;

const cardImgUrl: CardImgUrl = {
  virtual: "/image/eventsPage/virtualCity.svg",
  inPerson: "/image/eventsPage/inPersonCity.svg",
};

interface eventProps {
  location: LocationType;
  eventType: EventType;
  theme: string;
  dateUnix: number;
  duration: number;
}

export default function EventCard({
  location,
  eventType,
  theme,
  dateUnix,
  duration,
  ...props
}: eventProps) {
  return (
    <VStack
      justifyContent="space-between"
      {...props}
      border="2px"
      borderRadius="md"
    >
      <Box p="1rem">
        <HStack width="100%" my="1rem" justifyContent="space-between">
          <Box
            pos="relative"
            width={location == "IN-PERSON" ? "35px" : "96px"}
            height="68px"
          >
            <Image
              src={
                location == "IN-PERSON"
                  ? cardImgUrl.inPerson
                  : cardImgUrl.virtual
              }
              alt="An illustration of event type"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Text
            border="2px"
            px="8px"
            py="3px"
            fontSize="11px"
            background="#BBB5DE"
            borderColor="black"
            borderRadius="xl"
          >
            {location}
          </Text>
        </HStack>

        <Box>
          <Text>{moment.unix(dateUnix).format("MMM")}</Text>
          <Text fontSize="3xl" fontWeight="bold">
            {moment.unix(dateUnix).format("D")}
          </Text>
        </Box>
        <Text my="1rem" fontWeight="semibold" fontSize="20px">
          {theme}
        </Text>
        <Text my="1rem">{eventType}</Text>
      </Box>

      <HStack width="100%" p="1rem" bg="#F6E6C7" justifyContent="space-between">
        <Text>Open</Text>
        {ETHABJ_SVG().arrowRightIcon2()}
      </HStack>
    </VStack>
  );
}

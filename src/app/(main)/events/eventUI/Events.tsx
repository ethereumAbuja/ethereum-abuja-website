"use client";

import React from "react";
import {
  Box,
  Heading,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Grid,
} from "@chakra-ui/react";
import ContainerWrapper from "@/components/ContainerWrapper";
import { ChevronDownIcon } from "@chakra-ui/icons";
import EventCard from "./EventCards";
import PaginationControls from "./PaginationControl";
import { useRouter, useSearchParams } from "next/navigation";
import { getEvents } from "@/lib/Events";
import Link from "next/link";
import clsx from "clsx";

export default function Events({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 9;

  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const { events, totalPages } = getEvents({ page, limit, query: search });
  const paginationButtons = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <Box mx={["1.5rem", "1.5rem", "6rem"]}>
      <Flex
        flexDirection={["column", "row"]}
        gap={15}
        my="2rem"
        alignItems="center"
        width="100%"
      >
        <Heading width={["100%", "", ""]}>Upcoming Events</Heading>
        <Menu matchWidth>
          <MenuButton
            width={["100%", "100% ", " "]}
            textAlign="left"
            textColor="white"
            background="black"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            All Events
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={["1rem", "1.5rem", "1rem"]}
      >
        {events.map((item, index) => {
          return (
            <EventCard
              key={index}
              location={item.location}
              eventType={item.eventType}
              theme={item.theme}
              dateUnix={item.dateUnix}
              duration={item.duration}
            />
          );
        })}
      </Grid>
      <PaginationControls
        currPage={Number(searchParams.page)}
        totalPages={totalPages}
        search={search ? search.toString() : ""}
      />
    </Box>
  );
}

export type EventType =
  | "Physical Meetup"
  | "Product Demo Day"
  | "Technical Workshop"
  | "Virtual Hackathon";
export type LocationType = "VIRTUAL" | "IN-PERSON";

// type EventList = {
//   eventType: EventType;
//   theme: string;
//   dateUnix: number;
//   duration: number; // Duration of the event in seconds
//   location: LocationType; // Location type: Virtual or In-Person
// };
// const eventsList: EventList[] = [
//   {
//     eventType: "Physical Meetup",
//     theme: "Aya Gigs X Ethereum Amsterdam 2024 Hackathon Event",
//     dateUnix: 1668691200,
//     duration: 10800,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Product Demo Day",
//     theme: "Tech Showcase: Future Innovations",
//     dateUnix: 1669276800,
//     duration: 7200,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Technical Workshop",
//     theme: "Advanced Web Development Workshop",
//     dateUnix: 1669862400,
//     duration: 10800,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Virtual Hackathon",
//     theme: "Decentralized App Development Challenge",
//     dateUnix: 1670448000,
//     duration: 7200,
//     location: "VIRTUAL",
//   },
//   // Additional events to make the array at least 10
//   {
//     eventType: "Physical Meetup",
//     theme: "AI and Robotics Symposium",
//     dateUnix: 1671033600,
//     duration: 7200,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Product Demo Day",
//     theme: "Startup Pitch Day: Emerging Technologies",
//     dateUnix: 1671619200,
//     duration: 10800,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Technical Workshop",
//     theme: "Cybersecurity Training Session",
//     dateUnix: 1672204800,
//     duration: 7200,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Virtual Hackathon",
//     theme: "Blockchain for Social Impact",
//     dateUnix: 1672790400,
//     duration: 10800,
//     location: "VIRTUAL",
//   },
//   {
//     eventType: "Physical Meetup",
//     theme: "Data Science and Machine Learning Forum",
//     dateUnix: 1673376000,
//     duration: 10800,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Product Demo Day",
//     theme: "Digital Marketing Trends Expo",
//     dateUnix: 1673961600,
//     duration: 7200,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Technical Workshop",
//     theme: "AI Ethics and Responsible Innovation",
//     dateUnix: 1674547200,
//     duration: 7200,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Virtual Hackathon",
//     theme: "Smart Cities Development Challenge",
//     dateUnix: 1675132800,
//     duration: 10800,
//     location: "VIRTUAL",
//   },
//   {
//     eventType: "Physical Meetup",
//     theme: "Quantum Computing Symposium",
//     dateUnix: 1675718400,
//     duration: 7200,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Product Demo Day",
//     theme: "Innovative Gadgets and Wearables Expo",
//     dateUnix: 1676304000,
//     duration: 10800,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Technical Workshop",
//     theme: "DevOps and Continuous Integration Bootcamp",
//     dateUnix: 1676893200,
//     duration: 7200,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Virtual Hackathon",
//     theme: "AR/VR Application Development Challenge",
//     dateUnix: 1677478800,
//     duration: 10800,
//     location: "VIRTUAL",
//   },
//   {
//     eventType: "Physical Meetup",
//     theme: "Space Exploration and Technology Showcase",
//     dateUnix: 1678064400,
//     duration: 7200,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Product Demo Day",
//     theme: "Health Tech Innovations Expo",
//     dateUnix: 1678650000,
//     duration: 10800,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Technical Workshop",
//     theme: "Cloud Computing Solutions Workshop",
//     dateUnix: 1679235600,
//     duration: 7200,
//     location: "IN-PERSON",
//   },
//   {
//     eventType: "Virtual Hackathon",
//     theme: "Ethereum Smart Contract Competition",
//     dateUnix: 1679821200,
//     duration: 10800,
//     location: "VIRTUAL",
//   },
// ];

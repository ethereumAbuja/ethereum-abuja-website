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
export default function Events() {
  return (
    <Box>
      <Flex flexDirection={["column", "row"]} alignItems="center" width="100%">
        <Heading width="100%">Upcoming Events</Heading>
        <Menu matchWidth>
          <MenuButton
            width="100%"
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
        gap={4}
      >
        {eventsList.map((item, index) => {
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
      {/* pagination */}
    </Box>
  );
}

export type EventType =
  | "Physical Meetup"
  | "Product Demo Day"
  | "Technical Workshop"
  | "Virtual Hackathon";
export type LocationType = "VIRTUAL" | "IN-PERSON";

type EventList = {
  eventType: EventType;
  theme: string;
  dateUnix: number;
  duration: number; // Duration of the event in seconds
  location: LocationType; // Location type: Virtual or In-Person
};
const eventsList: EventList[] = [
  {
    eventType: "Physical Meetup",
    theme: "Aya Gigs X Ethereum Amsterdam 2024 Hackathon Event",
    dateUnix: 1668691200,
    duration: 10800,
    location: "IN-PERSON",
  },
  {
    eventType: "Product Demo Day",
    theme: "Tech Showcase: Future Innovations",
    dateUnix: 1669276800,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Technical Workshop",
    theme: "Advanced Web Development Workshop",
    dateUnix: 1669862400,
    duration: 10800,
    location: "IN-PERSON",
  },
  {
    eventType: "Virtual Hackathon",
    theme: "Decentralized App Development Challenge",
    dateUnix: 1670448000,
    duration: 7200,
    location: "VIRTUAL",
  },
  // Additional events to make the array at least 10
  {
    eventType: "Physical Meetup",
    theme: "AI and Robotics Symposium",
    dateUnix: 1671033600,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Product Demo Day",
    theme: "Startup Pitch Day: Emerging Technologies",
    dateUnix: 1671619200,
    duration: 10800,
    location: "IN-PERSON",
  },
  {
    eventType: "Technical Workshop",
    theme: "Cybersecurity Training Session",
    dateUnix: 1672204800,
    duration: 7200,
    location: "IN-PERSON",
  },
  {
    eventType: "Virtual Hackathon",
    theme: "Blockchain for Social Impact",
    dateUnix: 1672790400,
    duration: 10800,
    location: "VIRTUAL",
  },
  {
    eventType: "Physical Meetup",
    theme: "Data Science and Machine Learning Forum",
    dateUnix: 1673376000,
    duration: 10800,
    location: "IN-PERSON",
  },
  {
    eventType: "Product Demo Day",
    theme: "Digital Marketing Trends Expo",
    dateUnix: 1673961600,
    duration: 7200,
    location: "IN-PERSON",
  },
];

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
import { getEvents } from "@/utils/Events";

const Events = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {

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
      <ContainerWrapper>
      <Flex
        flexDirection={["column", "row"]}
        gap={15}
        my="2rem"
        alignItems="center"
        width="100%"
      >
        <Heading width={["100%", "", ""]}
          fontFamily="Space Grotesk"
          fontSize="32px"
        >
          Upcoming Events
        </Heading>
        <Menu matchWidth>
          <MenuButton
            width={["100%", "410px", " "]}
            h="52px"
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
      </ContainerWrapper>
    </Box>
  );
}

export default Events

export type EventType =
  | "Physical Meetup"
  | "Product Demo Day"
  | "Technical Workshop"
  | "Virtual Hackathon";
export type LocationType = "VIRTUAL" | "IN-PERSON";
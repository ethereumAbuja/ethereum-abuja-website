"use client";

import { useState } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import ContainerWrapper from "@/components/ContainerWrapper";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { nanoid } from "@reduxjs/toolkit";
import { getEvents } from "@/utils/Events";
import { EventType } from "@/utils/Events";
import dynamic from "next/dynamic";

const NoEvents = dynamic(() => import("./components/NoEvents"), {
  ssr: false,
  loading: () => (
    <Box>
      <Spinner size={"sm"} />
    </Box>
  ),
});

const PaginationControls = dynamic(
  () => import("@/components/PaginationControl"),
  {
    ssr: false,
    loading: () => (
      <Box>
        <Spinner size={"sm"} />
      </Box>
    ),
  }
);

const EventCard = dynamic(() => import("./components/EventCards"), {
  ssr: false,
  loading: () => (
    <Box>
      <Spinner size={"sm"} />
    </Box>
  ),
});

const Events = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 9;

  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const { events, totalPages } = getEvents({ page, limit, query: search });

  const [selectedEventType, setSelectedEventType] = useState<EventType | null>(
    null
  );

  const handleMenuItemClick = (menuItem: EventType | null) => {
    setSelectedEventType(menuItem === selectedEventType ? null : menuItem);
  };

  // filter events based on selected event type
  const filteredEvents = selectedEventType
    ? events.filter((event) => event.eventType === selectedEventType)
    : events;

  return (
    <Box mx={["0", "0", "6rem"]}>
      <ContainerWrapper>
        <Flex
          flexDirection={["column", "row"]}
          gap={15}
          my="2rem"
          alignItems="center"
          width="100%"
        >
          <Heading
            width={["100%", "", ""]}
            fontFamily="Space Grotesk"
            fontSize={["25px", "25px", "32px"]}
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
              {selectedEventType
                ? `Filter: ${selectedEventType}`
                : "All Events"}
            </MenuButton>
            <MenuList>
              {[
                "Physical Meetup",
                "Product Demo Day",
                "Technical Workshop",
                "Virtual Hackathon",
              ].map((eventType) => (
                <MenuItem
                  key={eventType}
                  onClick={() => handleMenuItemClick(eventType as EventType)}
                >
                  {eventType}
                </MenuItem>
              ))}
              <MenuItem onClick={() => handleMenuItemClick(null)}>
                Clear Filter
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        {filteredEvents.length === 0 ? (
          <NoEvents />
        ) : (
          <>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={["1rem", "1.5rem", "1rem"]}
            >
              {filteredEvents.map((item) => (
                // return (
                <EventCard
                  key={nanoid()}
                  location={item.location}
                  eventType={item.eventType}
                  theme={item.theme}
                  date={item.date}
                  monthYear={item.monthYear}
                  link={item.link}
                />
                // );
              ))}
            </Grid>

            <PaginationControls
              currPage={page}
              totalPages={totalPages}
              search={search ? search : ""}
              pathName="/events"
            />
          </>
        )}
      </ContainerWrapper>
    </Box>
  );
};

export default Events;

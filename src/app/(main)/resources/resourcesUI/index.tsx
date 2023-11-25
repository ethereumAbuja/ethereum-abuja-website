"use client";

import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  HStack,
} from "@chakra-ui/react";
import ContainerWrapper from "@/components/ContainerWrapper";
import { ChevronDownIcon } from "@chakra-ui/icons";
import GuidesResources from "./Guides";
import Media from "./Media";

const Resources = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const [route, setRoute] = useState(
    searchParams.route ? searchParams.route : "guides"
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
          justifyContent="space-between"
        >
          <HStack>
            <Heading
              width={["100%", "", ""]}
              fontFamily="Space Grotesk"
              fontSize="32px"
              whiteSpace="nowrap"
              color={route === "guides" ? "black" : "#C7C7C7"}
              onClick={() => setRoute("guides")}
            >
              Guides & Resources
            </Heading>
            <Heading
              width={["100%", "", ""]}
              fontFamily="Space Grotesk"
              fontSize="32px"
            >
              |
            </Heading>
            <Heading
              width={["100%", "", ""]}
              fontFamily="Space Grotesk"
              fontSize="32px"
              whiteSpace="nowrap"
              color={route === "media" ? "black" : "#C7C7C7"}
              onClick={() => setRoute("media")}
            >
              Media
            </Heading>
          </HStack>
          {route === "guides" && (
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
                All Guides
              </MenuButton>
              <MenuList zIndex="5">
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
        {route === "guides" ? (
          <GuidesResources searchParams={searchParams} />
        ) : (
          <Media searchParams={searchParams} />
        )}
      </ContainerWrapper>
    </Box>
  );
};

export default Resources;

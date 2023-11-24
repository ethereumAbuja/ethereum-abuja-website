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
import ResourceCard from "./ResourceCards";
import { useRouter, useSearchParams } from "next/navigation";

import { getResources } from "@/utils/Resources";
import PaginationControls from "@/components/PaginationControl";

const Resources = ({
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

  const { resources, totalPages } = getResources({
    page,
    limit,
    query: search,
  });

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
          <Heading
            width={["100%", "", ""]}
            fontFamily="Space Grotesk"
            fontSize="32px"
          >
            Media & Resources
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
              All Guides
            </MenuButton>
            <MenuList zIndex="5">
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={["1rem", "1.5rem", "1rem"]}
        >
          {resources.map(({ dateUnix, title, resourceType }, index) => {
            return (
              <ResourceCard
                key={index}
                dateUnix={dateUnix}
                title={title}
                resourceType={resourceType}
              />
            );
          })}
        </Grid>
        <PaginationControls
          currPage={page}
          totalPages={totalPages}
          search={search ? search : ""}
          pathName="/resources"
        />
      </ContainerWrapper>
    </Box>
  );
};

export default Resources;

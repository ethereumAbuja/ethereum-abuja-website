"use client";

import React from "react";
import { Grid } from "@chakra-ui/react";
import ResourceCard from "./ResourceCards";

import { getMedia, getResources } from "@/utils/Resources";
import PaginationControls from "@/components/PaginationControl";
import NoGuideMedia from "./NoGuideMedia";

const Media = ({
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

  const { media, totalPages } = getMedia({
    page,
    limit,
    query: search,
  });

  return (
    <>
      {media.length === 0 ? (
        <NoGuideMedia />
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
            {media.map(({ dateUnix, title, resourceType }, index) => (
              <ResourceCard
                key={index}
                dateUnix={dateUnix}
                title={title}
                resourceType={resourceType}
              />
            ))}
          </Grid>
          <PaginationControls
            currPage={page}
            totalPages={totalPages}
            search={search ? search : ""}
            pathName="/resources?route=media"
          />
        </>
      )}
    </>
  );
};

export default Media;

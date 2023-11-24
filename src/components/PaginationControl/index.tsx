"use client";

import { FC } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import path from "path";

interface PaginationControlsProps {
  currPage: number;
  totalPages: number;
  search: string;
  pathName: string;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  currPage,
  totalPages,
  search,
  pathName,
}) => {
  const paginationButtons = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <Box
      mt={4}
      display="flex"
      justifyContent={["center", "center", "space-between"]}
      mb="40px"
    >
      <Button
        display={["hidden", "hidden", "inline-flex"]}
        mx={1}
        disabled={currPage == 1}
      >
        <Link
          href={{
            pathname: pathName,
            query: {
              ...(search ? { search } : {}),
              page: currPage - 1,
            },
          }}
        >
          Previous
        </Link>
      </Button>
      <Flex justifyContent="center" gap="9px">
        {paginationButtons.map((pageNumber) => (
          <Button
            key={pageNumber}
            mx={1}
            background={pageNumber == currPage || null ? "#BBB5DF" : ""}
          >
            <Link
              href={{
                pathname: pathName,
                query: {
                  ...(search ? { search } : {}),
                  page: pageNumber,
                },
              }}
            >
              {pageNumber}
            </Link>
          </Button>
        ))}
      </Flex>
      <Button
        display={["hidden", "hidden", "inline-flex"]}
        mx={1}
        disabled={currPage == totalPages}
      >
        <Link
          href={{
            pathname: pathName,
            query: {
              ...(search ? { search } : {}),
              page: currPage + 1,
            },
          }}
        >
          Next
        </Link>
      </Button>
    </Box>
  );
};

export default PaginationControls;

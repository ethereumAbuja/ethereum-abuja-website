"use client";

import { FC } from "react";
import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { COLORS } from "@/constants/theme/lightDarkTheme";
import { ETHABJ_SVG } from "@/assets/svg";

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
      mt="60px"
      display="flex"
      justifyContent={["center", "center", "space-between"]}
      mb="40px"
    >
      <Button
        display={["hidden", "hidden", "inline-flex"]}
        mx={1}
        disabled={currPage == 1}
        border="1.5px solid black"
        bg={COLORS.white}
        p="8px 14px"
      >
        <HStack>
          {ETHABJ_SVG().arrowPagLeftIcon()}
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
        </HStack>
      </Button>
      <Flex justifyContent="center" gap="9px">
        {paginationButtons.map((pageNumber) => (
          <Button
            key={pageNumber}
            mx={1}
            // background={pageNumber == currPage || null ? "#BBB5DF" : ""}
            background={pageNumber === currPage ? "#BBB5DF" : ""}
            disabled={pageNumber === currPage} // Set disabled bas
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
        border="1.5px solid black"
        bg={COLORS.white}
        p="8px 14px"
        borderRadius="8px"
      >
        <HStack>
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
          {ETHABJ_SVG().arrowPagRightIcon()}
        </HStack>
      </Button>
    </Box>
  );
};

export default PaginationControls;

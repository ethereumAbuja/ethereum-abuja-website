import React from "react";
import Resources from "./resourcesUI";

export const metadata = {
  title: "ETHAbuja | Guides & Resources",
};

export default function Event({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("this is search params", searchParams);
  return (
    <>
      <Resources searchParams={searchParams} />
    </>
  );
}

"use client";

import React from "react";
import Events from "./resourcesUI";

export default function Event({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("this is search params", searchParams);
  return (
    <>
      <Events searchParams={searchParams} />
    </>
  );
}

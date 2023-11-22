"use client";

import React from "react";
import EventUI from "./eventUI";

import Header from "./eventUI/Header";
import Events from "./eventUI/Events";

export default function Event({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("this is search params", searchParams);
  return (
    <>
      <Header />
      <Events searchParams={searchParams} />
    </>
  );
}

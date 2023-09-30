import React from "react";
import HomeUI from './homeUI'

export const metadata = {
  title: "ETHAbuja",
};

export default async function Home() {
  return <HomeUI pipelineData={null} />;
}

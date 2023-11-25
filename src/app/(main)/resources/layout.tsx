import { ReactNode } from "react";
import Header from "./resourcesUI/Header";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

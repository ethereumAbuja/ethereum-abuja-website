import { ReactNode } from "react";
import Header from "./eventUI/Header";

export const metadata = {
  title: "ETHAbuja | Events",
};
export default function HomeLayout({ children }: { children: ReactNode }) {
  return <>
   <Header />
  {children}
  </>;
}
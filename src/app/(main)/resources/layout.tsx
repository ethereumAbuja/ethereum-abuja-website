import { ReactNode } from "react";
import Header from "./resourcesUI/Header";

export const metadata = {
  title: "ETHAbuja | Guides & Resources",
};
export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

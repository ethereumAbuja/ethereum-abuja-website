"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function MainAppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

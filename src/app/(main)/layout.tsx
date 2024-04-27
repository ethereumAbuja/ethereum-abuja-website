"use client";
import AnnoucementNavbar from "@/components/AnnouncementNavbar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function MainAppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav style={{ position: "fixed", zIndex: "30", width: "100%" }}>
        <AnnoucementNavbar />
        <NavBar />
      </nav>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

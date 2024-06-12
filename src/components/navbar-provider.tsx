"use client";
import { useState } from "react";
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";

function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div
      className={`min-h-screen flex flex-col ${
        isSideBarOpen && "overflow-hidden"
      }`}
    >
      <Navbar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default NavbarProvider;

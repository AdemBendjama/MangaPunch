"use client";
import { useState } from "react";
import Navbar from "./ui/navbar/navbar";

function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className={`${isSideBarOpen && "h-screen overflow-hidden"}`}>
      <Navbar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      {children}
    </div>
  );
}

export default NavbarProvider;

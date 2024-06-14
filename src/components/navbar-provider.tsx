"use client";
import { useState } from "react";
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";
import { usePathname } from "next/navigation";

function NavbarProvider({ children }: { children: React.ReactNode }) {
  const currentPathname = usePathname();
  const pathnames: RegExp[] = [/^\/auth\/signin$/, /^\/auth\/signup$/];
  let hideUI = false;
  for (const pathname of pathnames) {
    if (pathname.test(currentPathname)) {
      hideUI = true;
      break;
    }
  }
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div
      className={`min-h-screen flex flex-col ${
        isSideBarOpen && "overflow-hidden"
      }`}
    >
      {!hideUI && (
        <Navbar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      )}
      <main className="flex-grow">{children}</main>
      {!hideUI && <Footer />}
    </div>
  );
}

export default NavbarProvider;

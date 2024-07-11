"use client";
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";
import { usePathname } from "next/navigation";

function NavbarProvider({ children }: { children: React.ReactNode }) {
  const currentPathname = usePathname();
  const pathnames: RegExp[] = [
    /^\/auth\/signin$/,
    /^\/auth\/signup$/,
    /^\/auth\/signup\/verify-email$/,
  ];
  let hideUI = false;
  for (const pathname of pathnames) {
    if (pathname.test(currentPathname)) {
      hideUI = true;
      break;
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {!hideUI && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideUI && <Footer />}
    </div>
  );
}

export default NavbarProvider;

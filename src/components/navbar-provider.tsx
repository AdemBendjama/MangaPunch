import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

function NavbarProvider({
  children,
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  const currentPathname = usePathname();
  const pathnames: RegExp[] = [/^\/auth\/signin$/, /^\/auth\/signup$/];
  let hideUI = false;
  for (const pathname of pathnames) {
    if (pathname.test(currentPathname)) {
      hideUI = true;
      break;
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
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

"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NavbarSideBar from "./navbar-sidebar";
import NavbarIconNavigation from "./navbar-icon-navigation";
import NavbarTitleNavigation from "./navbar-title-navigation";
import NavbarLogo from "./navbar-logo";

function Navbar({
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    setIsReady(true);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isReady) {
    return <header className="h-[3.75rem] bg-primary  dark:bg-card"></header>;
  }

  const toggleSideBar = () => {
    setIsSideBarOpen((prevState) => !prevState);
  };

  const sideBar = isSmallScreen && (
    <NavbarSideBar
      isSideBarOpen={isSideBarOpen}
      isMobile={isMobile}
      toggleSideBar={toggleSideBar}
    />
  );
  const logoTitle = !isMobile && (
    <div className="text-[1.375rem] font-bold">MangaPunch</div>
  );

  return (
    <header className="flex flex-row justify-between h-[3.75rem] lg:px-[5rem] bg-primary text-primary-foreground dark:bg-card dark:text-card-foreground">
      {/* left navigation */}
      <div className="flex items-center relative gap-[0.25rem]">
        {/* sidebar */}
        {sideBar}

        {/* logo */}
        <NavbarLogo />
        {logoTitle}
      </div>

      {/* center navigation */}
      {!isSmallScreen && <NavbarTitleNavigation />}

      {/* right navigation */}
      <NavbarIconNavigation />
    </header>
  );
}

export default Navbar;

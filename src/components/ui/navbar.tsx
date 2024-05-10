"use client";

import Image from "next/image";
import SearchIcon from "../icons/search-icon";
import ProfileIcon from "../icons/profile-icon";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SideBarIcon from "../icons/sidebar-icon";

function Navbar({
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { setTheme } = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      setIsMobile(window.innerWidth < 568);
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

  return (
    <header
      className={`flex flex-row justify-between h-[3.75rem] ${
        !isSmallScreen ? "px-[5rem]" : "px-0"
      } bg-primary text-primary-foreground dark:bg-card dark:text-card-foreground`}
    >
      <div className="flex items-center relative gap-[0.25rem]">
        {/* sidebar */}
        {isSmallScreen && (
          <>
            {isSideBarOpen && (
              <div
                className="w-screen h-screen bg-black bg-opacity-70 absolute top-[3.75rem] z-10"
                onClick={toggleSideBar}
              ></div>
            )}
            <div
              className={`absolute left-0 top-[3.75rem] bg-sidebar text-lg font-bold h-screen ${
                isMobile ? "w-screen" : "w-[18.75rem]"
              } ${
                isSideBarOpen
                  ? "translate-x-0 opacity-100 transition-all duration-300 ease-in-out z-20"
                  : "-translate-y-2 opacity-0 transition-all duration-300 ease-in-out -z-10"
              }`}
            >
              <div className="flex items-center h-[3.75rem] w-full text-[1.125rem] pl-[1rem]">
                Home
              </div>
              <div className="flex items-center h-[3.75rem] w-full text-[1.125rem] pl-[1rem]">
                Top Manga
              </div>
              <div className="flex items-center h-[3.75rem] w-full text-[1.125rem] pl-[1rem]">
                Library
              </div>
            </div>
            <div
              className={`flex items-center justify-center h-[3.75rem] w-[3.75rem] ${
                isSideBarOpen && "bg-sidebar"
              }`}
            >
              <SideBarIcon
                width={24}
                height={24}
                className="stroke-primary-foreground hover:cursor-pointer"
                onClick={toggleSideBar}
              />
            </div>
          </>
        )}

        {/* logo */}
        <div className="flex items-center justify-center h-[3.75rem]">
          <Image
            src="/assets/images/manga-logo.png"
            alt="logo"
            width={32}
            height={32}
          ></Image>
        </div>
        {!isMobile && (
          <div className="text-[1.375rem] font-bold">MangaPunch</div>
        )}
      </div>

      {/* title navigation */}
      {!isSmallScreen && (
        <nav className="flex items-center gap-[3.75rem] text-lg font-bold">
          <div>Home</div>
          <div>Top Manga</div>
          <div>Library</div>
        </nav>
      )}

      {/* icon navigation */}
      <nav className="flex items-center">
        <div className="flex items-center justify-center h-[3.75rem] w-[3.75rem]">
          <SearchIcon
            width={24}
            height={24}
            className="stroke-primary-foreground"
          />
        </div>
        <div className="flex items-center justify-center h-[3.75rem] w-[3.75rem]">
          <ProfileIcon
            width={24}
            height={24}
            className="stroke-primary-foreground"
          />
        </div>
        <div className="flex items-center justify-center h-[3.75rem] w-[3.75rem]">
          <MoonIcon
            width={24}
            height={24}
            className="stroke-primary-foreground hover:cursor-pointer scale-100 dark:scale-0"
            onClick={() => setTheme("dark")}
          />
          <SunIcon
            width={24}
            height={24}
            className="absolute stroke-primary-foreground hover:cursor-pointer scale-0 dark:scale-100"
            onClick={() => setTheme("light")}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

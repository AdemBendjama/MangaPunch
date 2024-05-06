"use client";

import Image from "next/image";
import SearchIcon from "../icons/search-icon";
import ProfileIcon from "../icons/profile-icon";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Navbar() {
  const { setTheme } = useTheme();
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1025);
    };

    handleResize(); // Check the initial viewport width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex flex-row justify-between h-[3.75rem] px-20 bg-primary text-primary-foreground dark:bg-card dark:text-card-foreground">
      <div className="flex items-center gap-[4px]">
        <div className="w-8 h-8">
          <Image
            src="/assets/images/manga-logo.png"
            alt="logo"
            width={32}
            height={32}
          ></Image>
        </div>
        {!isTablet && (
          <div className="text-[1.375rem] font-bold">MangaPunch</div>
        )}
      </div>
      {!isTablet && (
        <nav className="flex items-center gap-[60px] text-lg font-bold">
          <div>Home</div>
          <div>Top Manga</div>
          <div>Library</div>
        </nav>
      )}
      <nav className="flex items-center">
        <div className="flex items-center justify-center [60px] w-[60px]">
          <SearchIcon
            width={24}
            height={24}
            className="stroke-primary-foreground"
          />
        </div>
        <div className="flex items-center justify-center [60px] w-[60px]">
          <ProfileIcon
            width={24}
            height={24}
            className="stroke-primary-foreground"
          />
        </div>
        <div className="flex items-center justify-center [60px] w-[60px]">
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

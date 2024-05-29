import SearchIcon from "../../icons/search-icon";
import ProfileIcon from "../../icons/profile-icon";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

function NavbarIconNavigation() {
  const { setTheme } = useTheme();

  const iconStyle = "flex items-center justify-center h-[3.75rem] w-[3.75rem]";
  return (
    <nav className="flex items-center">
      <div className={iconStyle}>
        <SearchIcon
          width={24}
          height={24}
          className="stroke-primary-foreground"
        />
      </div>
      <Link href="/user/profile">
        <div className={iconStyle}>
          <ProfileIcon
            width={24}
            height={24}
            className="stroke-primary-foreground"
          />
        </div>
      </Link>
      <div className={iconStyle}>
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
  );
}

export default NavbarIconNavigation;

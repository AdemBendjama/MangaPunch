import { Dispatch, SetStateAction } from "react";
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
  const toggleSideBar = () => {
    setIsSideBarOpen((prevState) => !prevState);
  };

  return (
    <header className="flex flex-row justify-between h-[3.75rem] lg:px-[5rem] bg-primary text-primary-foreground dark:bg-card dark:text-card-foreground">
      {/* left navigation */}
      <div className="flex items-center relative gap-[0.25rem]">
        {/* sidebar */}
        <NavbarSideBar
          isSideBarOpen={isSideBarOpen}
          toggleSideBar={toggleSideBar}
        />

        {/* logo */}
        <NavbarLogo />
      </div>

      {/* center navigation */}
      <NavbarTitleNavigation />

      {/* right navigation */}
      <NavbarIconNavigation />
    </header>
  );
}

export default Navbar;

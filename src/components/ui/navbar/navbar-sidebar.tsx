import SideBarIcon from "@/components/icons/sidebar-icon";
import Link from "next/link";

function NavbarSideBar({
  isSideBarOpen,
  toggleSideBar,
}: {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
}) {
  //
  const animateSideBar = isSideBarOpen
    ? "translate-x-0 opacity-100 transition-all duration-300 ease-in-out"
    : "-translate-x-full opacity-100 transition-all duration-300 ease-in-out";
  const headerStyle =
    "flex items-center h-[3.75rem] w-full text-[1.125rem] pl-[1rem]";

  //
  const backgroundOverlay = isSideBarOpen && (
    <div
      className="sm:block hidden w-screen h-screen bg-black bg-opacity-70 absolute top-[3.75rem]"
      onClick={toggleSideBar}
    />
  );
  return (
    <div className="lg:hidden">
      {/* background black overlay */}
      {backgroundOverlay}

      {/* animated pop out sidebar */}
      <div
        className={`absolute left-0 top-[3.75rem] bg-sidebar text-lg font-bold h-screen w-screen sm:w-[18.75rem] ${animateSideBar}`}
      >
        <Link href={`/`} onClick={toggleSideBar}>
          <div className={headerStyle}>Home</div>
        </Link>
        <Link href={`/manga/top-rated`} onClick={toggleSideBar}>
          <div className={headerStyle}>Top Manga</div>
        </Link>
        <Link href={`/user/library`} onClick={toggleSideBar}>
          <div className={headerStyle}>Library</div>
        </Link>
      </div>

      {/* side bar toggle button */}
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
    </div>
  );
}

export default NavbarSideBar;

import SideBarIcon from "@/components/icons/sidebar-icon";

function NavbarSideBar({
  isSideBarOpen,
  isMobile,
  toggleSideBar,
}: {
  isSideBarOpen: boolean;
  isMobile: boolean;
  toggleSideBar: () => void;
}) {
  return (
    <>
      {/* background black overlay */}
      {isSideBarOpen && (
        <div
          className="w-screen h-screen bg-black bg-opacity-70 absolute top-[3.75rem] z-10"
          onClick={toggleSideBar}
        ></div>
      )}

      {/* animated pop out sidebar */}
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
    </>
  );
}

export default NavbarSideBar;

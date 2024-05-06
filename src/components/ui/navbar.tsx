import Image from "next/image";
import SearchIcon from "../icons/search-icon";
import { ModeToggle } from "./mode-toggle";

function Navbar() {
  return (
    <header>
      <div>
        <Image
          src="/assets/images/manga-logo.png"
          alt="logo"
          width={32}
          height={32}
        ></Image>
        <div>MangaPunch</div>
      </div>
      <nav>
        <div className="text-sky-700">Home</div>
        <div>Top Manga</div>
        <div>Library</div>
      </nav>
      <nav>
        <SearchIcon width={24} height={24} className="stroke-card-footer" />
        <SearchIcon width={24} height={24} className="stroke-card-footer" />
        <SearchIcon width={24} height={24} className="stroke-card-footer" />
      </nav>
    </header>
  );
}

export default Navbar;

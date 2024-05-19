import Link from "next/link";

function NavbarTitleNavigation() {
  return (
    <nav className="lg:flex hidden items-center gap-[3.75rem] text-lg font-bold">
      <Link href={`/`}>
        <div>Home</div>
      </Link>
      <div>Top Manga</div>
      <div>Library</div>
    </nav>
  );
}

export default NavbarTitleNavigation;

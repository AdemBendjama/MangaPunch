import Image from "next/image";
import Link from "next/link";

function NavbarLogo() {
  return (
    <>
      <div className="flex items-center justify-center h-[3.75rem]">
        <Link href={`/`}>
          <Image
            src="/assets/images/manga-logo.png"
            alt="logo"
            width={32}
            height={32}
          ></Image>
        </Link>
      </div>
      <Link href={`/`}>
        <div className="sm:block hidden text-[1.375rem] font-bold">
          MangaPunch
        </div>
      </Link>
    </>
  );
}

export default NavbarLogo;

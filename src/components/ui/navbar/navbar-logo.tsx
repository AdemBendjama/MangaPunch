import Image from "next/image";

function NavbarLogo() {
  return (
    <>
      <div className="flex items-center justify-center h-[3.75rem]">
        <Image
          src="/assets/images/manga-logo.png"
          alt="logo"
          width={32}
          height={32}
        ></Image>
      </div>
      <div className="sm:block hidden text-[1.375rem] font-bold">
        MangaPunch
      </div>
    </>
  );
}

export default NavbarLogo;

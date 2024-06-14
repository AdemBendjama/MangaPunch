import Image from "next/image";
import Link from "next/link";

function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center pt-[2.5rem] min-h-screen shadow-outer-auth">
      <Image
        src="https://drive.usercontent.google.com/download?id=1vIDQF78W4KczBjHFllyzXEJIlpyxUpVr&authuser=0"
        alt="profile background page"
        fill={true}
        className="absolute object-cover object-bottom -z-10"
      />
      <div className="flex flex-col items-center gap-[1.5rem]">
        <div className="flex items-center gap-[0.25rem]">
          <Link href={`/`}>
            <Image
              src="/assets/images/manga-logo.png"
              alt="logo"
              width={48}
              height={48}
            ></Image>
          </Link>
          <Link href={`/`}>
            <span className="font-bold text-logo text-[2rem] text-shadow-lg">
              MangaPunch
            </span>
          </Link>
        </div>
        <div className="bg-card dark:bg-background border-t-4 border-border-auth rounded-t-[0.25rem]">
          {children}
          <div className="flex justify-center py-[0.75rem] h-[3rem] w-[29rem] bg-card-footer">
            <span className="text-sm text-black dark:text-white">
              No account?{" "}
              <span className="font-bold text-sm text-primary dark:text-primary-bright">
                CREATE ONE
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthProvider;

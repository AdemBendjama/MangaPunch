import Image from "next/image";
import Link from "next/link";
import { SignInForm } from "./forms/sign-in-form";
import { SignUpForm } from "./forms/sign-up-form";

function AuthProvider({ type }: { type: string }) {
  return (
    <div className="flex justify-center pt-[2.5rem] min-h-screen relative lg:shadow-auth-inner lg:bg-transparent bg-auth-bg">
      <Image
        src="/assets/images/SignInUp.jpg"
        alt="auth background page"
        width={1920}
        height={1080}
        className="fixed inset-0 w-full h-full object-cover object-bottom -z-10 lg:block hidden"
        unoptimized={true}
      />
      <div className="flex flex-col items-center gap-[1.5rem]">
        <div className="flex items-center gap-[0.25rem] sm:mt-0 mb-[1rem] mt-[1rem]">
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
        <div className="bg-card dark:bg-background-secondary border-t-4 border-border-auth rounded-t-[0.25rem] shadow-form-card-drop mb-[1.5rem]">
          <div className="flex flex-col gap-[0.5rem] sm:px-[2.5rem] px-[1.25rem] sm:py-[2rem] py-[1rem]">
            <div className="mx-auto pt-[0.5rem] pb-[1.5rem] font-bold sm:text-[1.375rem] text-[1.25rem]">
              {type === "signin" && "Log in to your account"}
              {type === "signup" && "Sign up to MangaPunch"}
            </div>
            {type === "signin" && <SignInForm />}
            {type === "signup" && <SignUpForm />}
          </div>
          <div className="flex justify-center py-[0.75rem] h-[3rem] sm:w-[29rem] w-[91vw] bg-card-footer">
            <span className="text-sm text-black dark:text-white">
              {type === "signin" && "No account? "}
              {type === "signup" && "Already have an account? "}
              <span className="font-bold text-sm text-primary dark:text-primary-bright">
                {type === "signin" && (
                  <Link href="/auth/signup">CREATE ONE</Link>
                )}
                {type === "signup" && <Link href="/auth/signin">LOG IN</Link>}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthProvider;

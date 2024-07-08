"use client";
import { ChangePasswordForm } from "@/components/forms/change-password-form";
import { UpdateUsernameForm } from "@/components/forms/update-username-form";
import ProfileBackgroundImage from "@/components/image/profile-background-image";
import ProfileImage from "@/components/image/profile-image";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return;
  }

  if (status === "unauthenticated") {
    router.replace("/auth/signin");
  }
  if (status === "authenticated") {
    return (
      <>
        <div className="h-[18.75rem] relative shadow-slide-inner-bg">
          <ProfileBackgroundImage />
          <ProfileImage username={session?.user?.name} />
        </div>
        <div className="flex sm:flex-row flex-col justify-evenly gap-[2rem] lg:mx-auto lg:w-[63rem] lg:px-[0] sm:px-[2rem] px-[1rem] lg:pb-[10rem] sm:pb-[6rem] pb-[3rem] pt-[2rem] dark:bg-background-secondary">
          <div className="sm:w-[24rem]">
            <div className="font-semibold text-2xl my-[0.5rem]">Account</div>
            <div className="flex flex-row gap-[0.5rem]">
              <UpdateUsernameForm username={session?.user?.name} />
            </div>
            <div className="flex flex-row gap-[0.5rem]">
              <ChangePasswordForm />
            </div>
          </div>
          <div className="sm:w-[24rem]">
            <div className="font-semibold text-2xl my-[0.5rem]">Session</div>
            <Button
              className="w-full sm:mt-[2rem] mt-[1rem]"
              variant="destructive"
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;

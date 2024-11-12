"use client";
import ProfileBackgroundImage from "@/components/image/profile-background-image";
import ProfileImage from "@/components/image/profile-image";
import AccountSection from "@/components/ui/account/account-section";
import SessionSection from "@/components/ui/session/session-section";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Profile() {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return;
  }

  if (status === "unauthenticated") {
    router.push("/auth/signin");
  }

  if (status === "authenticated") {
    return (
      <>
        <div className="h-[18.75rem] relative shadow-slide-inner-bg">
          <ProfileBackgroundImage />
          <ProfileImage username={session.user.name} />
        </div>
        <div className="flex sm:flex-row flex-col justify-evenly gap-[2rem] lg:mx-auto lg:w-[63rem] lg:px-[0] sm:px-[2rem] px-[1rem] lg:pb-[10rem] sm:pb-[6rem] pb-[3rem] pt-[2rem] dark:bg-background-secondary">
          <AccountSection
            email={session.user.email}
            username={session.user.name}
            hasPassword={session.user.hasPassword}
          />
          <SessionSection />
        </div>
      </>
    );
  }
}

export default Profile;

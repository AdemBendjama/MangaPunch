"use client";
import ProfileBackgroundImage from "@/components/image/profile-background-image";
import ProfileImage from "@/components/image/profile-image";

import LibraryDashboard from "@/components/ui/library/library-dashboard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Library() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return;
  }

  if (status === "unauthenticated") {
    router.replace("/auth/signin");
  }

  if (status === "authenticated") {
    return (
      <div className="text-foreground">
        <div className="h-[18.75rem] relative shadow-slide-inner-bg">
          <ProfileBackgroundImage />
          <ProfileImage username={session.user.name} />
        </div>
        <LibraryDashboard />
      </div>
    );
  }
}

export default Library;

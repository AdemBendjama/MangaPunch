"use client";

import { signOut } from "next-auth/react";
import { Button } from "../button";

function LogoutButton() {
  return (
    <Button
      className="w-full sm:mt-[2rem] mt-[1rem]"
      variant="destructive"
      onClick={() => {
        signOut({ callbackUrl: "/auth/signin" });
      }}
    >
      Logout
    </Button>
  );
}

export default LogoutButton;

"use client";
import { signIn } from "next-auth/react";
import { Button } from "../button";

function SignInProviders() {
  return (
    <div className="">
      <Button
        type="submit"
        className="w-full font-bold text-base"
        variant="github"
        onClick={() => signIn()}
      >
        Login with GitHub
      </Button>
    </div>
  );
}

export default SignInProviders;

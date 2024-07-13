"use client";
import { signIn } from "next-auth/react";
import { Button } from "../button";
import { Github, Mail } from "lucide-react";

function SignInProviders() {
  return (
    <div className="flex flex-col gap-[0.75rem]">
      <Button
        type="submit"
        className="w-full font-bold text-base text-black"
        variant="google"
        onClick={async () => await signIn("google")}
      >
        <Mail size={20} className="mb-[0.1rem]" absoluteStrokeWidth />
        <div className="mr-[1.5rem] ml-[0.75rem]">Log In with Google</div>
      </Button>
      <Button
        type="submit"
        className="w-full font-bold text-base"
        variant="github"
        onClick={async () => await signIn("github")}
      >
        <Github size={20} className="mb-[0.1rem]" absoluteStrokeWidth />
        <div className="mr-[1.5rem] ml-[0.75rem]">Log In with GitHub</div>
      </Button>
    </div>
  );
}

export default SignInProviders;

import { ChangePasswordForm } from "@/components/forms/change-password-form";
import { UpdateUsernameForm } from "@/components/forms/update-username-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function UserProfilePage() {
  return (
    <>
      <div className="h-[18.75rem] relative shadow-slide-inner-bg">
        <Image
          src="https://drive.usercontent.google.com/download?id=1dQbU-UtYOcZxMQG6a0En4zc28EHdvUHh&authuser=0"
          alt="profile background page"
          fill={true}
          className="object-cover -z-10"
        />
        <div className="h-full sm:ml-[7.5rem] ml-[0.5rem] sm:mr-0 mr-[0.5rem] flex items-end">
          <div className="sm:min-w-[13rem] sm:min-h-[13rem] min-w-[10rem] min-h-[10rem] relative">
            <Image
              src="/assets/images/footer.png"
              alt="footer image"
              fill={true}
              className="object-contain"
            />
          </div>
          <span className="font-bold sm:text-3xl text-lg sm:pb-[1rem] pb-[0.5rem] text-white dark:text-foreground overflow-hidden">
            @PoliceISwearToGod
          </span>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-[2rem] lg:px-[7.5rem] sm:px-[2rem] px-[1rem] lg:pb-[10rem] sm:pb-[6rem] pb-[3rem] pt-[2rem] bg-card dark:bg-background-secondary">
        <div className="sm:w-[24rem]">
          <div className="font-semibold text-2xl my-[0.5rem]">Account</div>
          <div className="flex flex-row gap-[0.5rem]">
            <UpdateUsernameForm />
          </div>
          <div className="flex flex-row gap-[0.5rem]">
            <ChangePasswordForm />
          </div>
        </div>
        <div className="sm:w-[24rem]">
          <div className="font-semibold text-2xl my-[0.5rem]">Session</div>
          <Button className="w-full sm:mt-[2rem]" variant="destructive">
            Logout
          </Button>
          <Link href="/auth/signin">
            <Button className="w-full sm:mt-[1rem]">Login</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UserProfilePage;

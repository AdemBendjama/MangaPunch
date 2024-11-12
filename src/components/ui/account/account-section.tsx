import { ChangePasswordForm } from "@/components/forms/change-password-form";
import { UpdateUsernameForm } from "@/components/forms/update-username-form";
import EmailDisplayReadOnly from "./email-display-read-only";

function AccountSection({
  email,
  username,
  hasPassword,
}: {
  email: string | undefined;
  username: string | undefined | null;
  hasPassword: boolean | null | undefined;
}) {
  return (
    <div className="sm:w-[24rem]">
      <div className="font-semibold text-2xl mt-2 mb-3">Account</div>
      <div className="flex flex-col gap-4">
        <EmailDisplayReadOnly email={email} />
        <UpdateUsernameForm username={username} />
        {hasPassword && <ChangePasswordForm />}
      </div>
    </div>
  );
}

export default AccountSection;

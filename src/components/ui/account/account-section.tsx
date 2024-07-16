import ChangePassword from "./change-password";
import ChangeUsername from "./change-username";

function AccountSection({
  username,
  hasPassword,
}: {
  username: string | undefined | null;
  hasPassword: boolean | null | undefined;
}) {
  return (
    <div className="sm:w-[24rem]">
      <div className="font-semibold text-2xl my-[0.5rem]">Account</div>
      <ChangeUsername username={username} />
      {hasPassword && <ChangePassword />}
    </div>
  );
}

export default AccountSection;

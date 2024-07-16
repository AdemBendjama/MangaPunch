import { UpdateUsernameForm } from "@/components/forms/update-username-form";

function ChangeUsername({ username }: { username: string | undefined | null }) {
  return (
    <div className="flex flex-row gap-[0.5rem]">
      <UpdateUsernameForm username={username} />
    </div>
  );
}

export default ChangeUsername;

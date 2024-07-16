import LogoutButton from "./logout-button";

function SessionSection() {
  return (
    <div className="sm:w-[24rem]">
      <div className="font-semibold text-2xl my-[0.5rem]">Session</div>
      <LogoutButton />
    </div>
  );
}

export default SessionSection;

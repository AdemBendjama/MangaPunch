import LogoutButton from "./logout-button";

function SessionSection() {
  return (
    <div className="sm:w-[24rem]">
      <div className="font-semibold text-2xl mt-2 mb-3">Session</div>
      <LogoutButton />
    </div>
  );
}

export default SessionSection;

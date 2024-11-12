import { Input } from "../input";
import { Label } from "../label";

function EmailDisplayReadOnly({ email }: { email: string | undefined }) {
  return (
    <div className="flex flex-row gap-[0.5rem]">
      <div className="w-full space-y-2">
        <Label>Email</Label>
        <Input placeholder={email} readOnly />
      </div>
    </div>
  );
}

export default EmailDisplayReadOnly;

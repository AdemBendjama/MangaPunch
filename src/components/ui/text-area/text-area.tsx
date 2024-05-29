import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithLabel({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        placeholder={placeholder}
        id={id}
        className="border border-input text-muted-foreground bg-background-secondary italic"
      />
    </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarReview({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt="avatar icon" />
      <AvatarFallback>ICON</AvatarFallback>
    </Avatar>
  );
}

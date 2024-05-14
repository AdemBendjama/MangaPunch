import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ArrowIcon({ type }: { type: string }) {
  const chevronStyle =
    "2xl:h-[1.25rem] 2xl:w-[1.25rem] lg:h-[1rem] lg:w-[1rem] sm:h-[0.875rem] sm:w-[0.875rem] h-[0.75rem] w-[0.75rem]";
  const chevron =
    type === "next" ? (
      <ChevronRight className={chevronStyle} />
    ) : type === "prev" ? (
      <ChevronLeft className={chevronStyle} />
    ) : null;

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-[6rem] shadow-black drop-shadow-lg 2xl:h-[2.75rem] 2xl:w-[2.75rem] lg:h-[2.5rem] lg:w-[2.5rem] sm:h-[2rem] sm:w-[2rem] h-[1.75rem] w-[1.75rem]"
      aria-label={`${type} Slide`}
    >
      <span className="sr-only">{type} Slide</span>
      {chevron}
    </Button>
  );
}

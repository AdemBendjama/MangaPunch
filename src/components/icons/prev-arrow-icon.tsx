import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PrevArrowIcon() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-[6rem] shadow-black drop-shadow-lg"
    >
      <ChevronLeft className="h-4 w-4 round-[6rem]" />
    </Button>
  );
}

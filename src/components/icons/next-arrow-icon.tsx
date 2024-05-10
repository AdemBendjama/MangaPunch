import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NextArrowIcon() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-[6rem] shadow-black drop-shadow-lg"
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  );
}

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

export function ButtonWithIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start">
      <Button className="bg-primary text-primary-foreground text-[14px] leading-none rounded-e-[0]">
        {children}
      </Button>
      <Button
        size="icon"
        className="bg-hover rounded-s-[0] w-[2rem] p-[0.5rem]"
        aria-label="Read More"
      >
        <ChevronRight
          size={16}
          className="stroke-hover-foreground"
          absoluteStrokeWidth
        />
        <span>Read More</span>
      </Button>
    </div>
  );
}

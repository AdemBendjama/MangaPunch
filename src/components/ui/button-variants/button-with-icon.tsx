import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

export function ButtonWithIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex justify-start">
      <Button
        className={`bg-primary text-primary-foreground text-[14px] leading-none rounded-e-[0] ${className}`}
      >
        {children}
      </Button>
      <Button
        size="icon"
        className="bg-hover rounded-s-[0] w-[2rem] p-[0.5rem]"
      >
        <ChevronRight
          size={16}
          className="stroke-hover-foreground"
          absoluteStrokeWidth
        />
      </Button>
    </div>
  );
}

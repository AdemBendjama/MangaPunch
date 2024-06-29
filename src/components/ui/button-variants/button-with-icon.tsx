import { Button, ButtonVariant } from "@/components/ui/button";
import { ChevronRight, Plus } from "lucide-react";
import React from "react";

export function ButtonWithIcon({
  children,
  className,
  type,
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "plus";
  variant?: ButtonVariant;
}) {
  return (
    <Button
      variant={variant || "default"}
      className={`flex justify-center text-[14px] leading-none px-[0.75rem] ${className}`}
    >
      <div className="flex justify-center flex-1">{children}</div>
      {type === "plus" && (
        <Plus
          size={16}
          className="stroke-hover-foreground"
          absoluteStrokeWidth
        />
      )}
      {!type && (
        <ChevronRight
          size={16}
          className="stroke-hover-foreground"
          absoluteStrokeWidth
        />
      )}
    </Button>
  );
}

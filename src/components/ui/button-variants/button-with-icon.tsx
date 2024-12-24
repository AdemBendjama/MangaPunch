import { Button, ButtonProps, ButtonVariant } from "@/components/ui/button";
import { BookOpen, ChevronRight, Plus } from "lucide-react";
import React from "react";

interface ButtonWithIconProps extends Omit<ButtonProps, "type"> {
  children: React.ReactNode;
  className?: string;
  type?: "plus" | "read";
  variant?: ButtonVariant;
}

export function ButtonWithIcon({
  children,
  className,
  type,
  variant,
  ...props
}: ButtonWithIconProps) {
  return (
    <Button
      variant={variant || "default"}
      className={`flex justify-center xs:text-[0.875rem] text-[0.75rem] leading-none sm:px-[0.75rem] px-[0.5rem] ${className}`}
      {...props}
    >
      <div className="flex justify-center flex-1">{children}</div>
      {type === "read" && (
        <BookOpen
          size={16}
          className="stroke-hover-foreground"
          absoluteStrokeWidth
        />
      )}
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

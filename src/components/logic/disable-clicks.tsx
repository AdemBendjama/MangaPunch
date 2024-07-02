"use client";
import { useEffect, useState } from "react";

function DisableClicks({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled: boolean;
}) {
  const [isDisabled, setIsDisabled] = useState(disabled);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDisabled(disabled);
    }, 300);

    return () => clearTimeout(timeout);
  }, [disabled]);

  return (
    <div style={{ pointerEvents: isDisabled ? "none" : "auto" }}>
      {children}
    </div>
  );
}

export default DisableClicks;

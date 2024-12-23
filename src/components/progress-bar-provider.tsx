"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ProgressBarProvider() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <ProgressBar
      key={theme}
      height="4px"
      color={theme === "light" ? "#e5f6ff" : "#0a82c2"}
      shallowRouting
      options={{ showSpinner: false }}
    />
  );
}

export default ProgressBarProvider;

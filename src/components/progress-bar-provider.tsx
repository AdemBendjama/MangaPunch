"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useTheme } from "next-themes";

function ProgressBarProvider() {
  const { theme } = useTheme();

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

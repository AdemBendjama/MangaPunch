"use client";

import { useEffect } from "react";
import { clearLocalStorageOnVersionChange } from "@/lib/utils";

const VersionChecker = () => {
  useEffect(() => {
    clearLocalStorageOnVersionChange();
  }, []);

  return null;
};

export default VersionChecker;

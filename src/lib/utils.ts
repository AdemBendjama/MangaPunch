import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Manga } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractAuthors(staff: Manga["staff"]): string[] {
  if (!staff) return ["N/A"];
  const rolesOfInterest = new Set(["Story & Art", "Story", "Art"]);
  return staff.edges
    .filter((edge) => rolesOfInterest.has(edge.role))
    .map((edge) => edge.node.name.full);
}

export function toTitleCase(input: string): string {
  if (!input) return "";

  const lowerCaseInput = input.toLowerCase();
  return lowerCaseInput.charAt(0).toUpperCase() + lowerCaseInput.slice(1);
}

export function formatStartDate(
  startDate: {
    year: number;
    month: number;
    day: number;
  } | null
) {
  if (!startDate) return "N/A";
  const { year, month, day } = startDate;
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(year, month - 1, day));

  return formattedDate;
}

"use client";

import { Manga } from "@/lib/types";
import useMangaDex from "@/lib/useMangaDex";

function ChapterCount({ titles }: { titles: Manga["title"] }) {
  const { latestChapter, loading, error } = useMangaDex(titles);

  if (loading) return;
  if (error) return;

  return <>{latestChapter}</>;
}

export default ChapterCount;

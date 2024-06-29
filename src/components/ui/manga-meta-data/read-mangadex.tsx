"use client";
import Link from "next/link";
import { ButtonWithIcon } from "../button-variants/button-with-icon";
import useMangaDex from "@/lib/useMangaDex";

function ReadMangaDex({
  titles,
}: {
  titles: {
    romaji: string;
    english: string | null;
    native: string | null;
  };
}) {
  const { mangaDexData, loading, error } = useMangaDex(titles);

  if (loading) return;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {mangaDexData && mangaDexData.length !== 0 && (
        <Link
          href={`https://mangadex.org/title/${mangaDexData[0].id}`}
          target="_blank"
        >
          <ButtonWithIcon className="w-full" variant="mangadex" type="read">
            Read on Mangadex
          </ButtonWithIcon>
        </Link>
      )}
    </>
  );
}

export default ReadMangaDex;

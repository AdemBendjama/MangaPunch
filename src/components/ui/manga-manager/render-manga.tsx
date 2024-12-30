"use client";
import { Manga } from "@/lib/types";
import CardRegular from "../card/card-regular";
import CardLarge from "../card/card-large";
import CardSmall from "../card/card-small";
import { useEffect } from "react";

function RenderManga({
  mangaData,
  cardType,
  requiresRank,
  toggleLimitReached,
  hover,
  data,
}: {
  mangaData: Manga[];
  cardType: "large" | "regular" | "small";
  requiresRank?: boolean;
  toggleLimitReached?: () => void;
  hover?: boolean;
  data?: LibraryData[];
}) {
  useEffect(() => {
    if (mangaData.length === 0 && toggleLimitReached) {
      toggleLimitReached();
    }
  }, [mangaData, toggleLimitReached]);

  return (
    <>
      {mangaData.map((manga) => {
        let rank = null;
        if (requiresRank && toggleLimitReached) {
          const ranking = manga.rankings.find(
            (ranking) => ranking.context === "highest rated all time"
          );
          if (!ranking) return;
          rank = ranking.rank;
          if (rank === 500) toggleLimitReached();
        }
        switch (cardType) {
          case "large":
            return (
              <CardLarge
                key={manga.id}
                id={manga.id}
                title={
                  manga.title.english ? manga.title.english : manga.title.romaji
                }
                coverImage={manga.coverImage.large}
              />
            );
          case "regular":
            return (
              <CardRegular
                key={manga.id}
                id={manga.id}
                rank={rank}
                title={
                  manga.title.english ? manga.title.english : manga.title.romaji
                }
                coverImage={manga.coverImage.large}
              />
            );
          case "small":
            const matchedManga = data?.filter((data) => data.id === manga.id);
            const trackedData: Omit<LibraryData, "id"> | undefined =
              matchedManga && {
                status: matchedManga[0].status,
                chapter: matchedManga[0].chapter,
                rating: matchedManga[0].rating,
              };
            return (
              <CardSmall
                key={manga.id}
                id={manga.id}
                title={
                  manga.title.english ? manga.title.english : manga.title.romaji
                }
                titles={manga.title}
                coverImage={manga.coverImage.large}
                hover={hover}
                trackedData={trackedData}
              />
            );
        }
      })}
    </>
  );
}

export default RenderManga;

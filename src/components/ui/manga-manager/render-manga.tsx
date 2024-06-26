import { Manga } from "@/lib/types";
import CardRegular from "../card/card-regular";
import CardLarge from "../card/card-large";
import CardSmall from "../card/card-small";

function RenderManga({
  mangaData,
  cardType,
  requiresRank,
  toggleLimitReached,
}: {
  mangaData: Manga[];
  cardType: "large" | "regular" | "small";
  requiresRank?: boolean;
  toggleLimitReached?: () => void;
}) {
  if (mangaData.length === 0 && toggleLimitReached) {
    toggleLimitReached();
    return;
  }
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
            return (
              <CardSmall
                key={manga.id}
                id={manga.id}
                title={
                  manga.title.english ? manga.title.english : manga.title.romaji
                }
                coverImage={manga.coverImage.large}
              />
            );
        }
      })}
    </>
  );
}

export default RenderManga;

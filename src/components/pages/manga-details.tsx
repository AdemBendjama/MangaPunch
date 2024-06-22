"use client";
import { useParams } from "next/navigation";
import MangaBackgroundImage from "../image/manga-background-image";
import MangaMetaData from "../ui/manga-details/manga-meta-data";
import MangaSection from "../ui/manga-details/manga-section";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import { GET_MANGA } from "@/lib/queries";
import { extractAuthors } from "@/lib/utils";

function MangaDetails() {
  const { mangaId } = useParams();
  const id = parseInt(Array.isArray(mangaId) ? mangaId[0] : mangaId);

  const { mangaData, loading, error } = useGraphQLQuery(GET_MANGA, {
    id: id,
  });

  if (loading) return;
  if (error) return <div>{error.message}</div>;

  const {
    title,
    staff,
    status,
    startDate,
    description,
    bannerImage,
    coverImage,
    rankings,
    averageScore,
  } = mangaData[0];

  const popularity = rankings.find(
    (ranking) => ranking.context === "most popular all time"
  )?.rank;

  const authors = extractAuthors(staff);

  return (
    <div className="text-foreground">
      <MangaBackgroundImage src={bannerImage} />
      <MangaMetaData
        src={coverImage.large}
        popularity={popularity}
        averageScore={averageScore}
        title={title.english ? title.english : title.romaji}
        authors={authors}
        status={status}
        startDate={startDate}
      />
      <MangaSection description={description} />
    </div>
  );
}

export default MangaDetails;

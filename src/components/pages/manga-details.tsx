"use client";
import { notFound, useParams } from "next/navigation";
import MangaBackgroundImage from "../image/manga-background-image";
import MangaMetaData from "../ui/manga-details/manga-meta-data";
import MangaSection from "../ui/manga-details/manga-section";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import { GET_MANGA } from "@/lib/queries";
import { extractAuthors } from "@/lib/utils";
import RecommendedMangaCards from "../ui/manga-details/recommended-manga-card";
import MangaDetailsProvider from "../ui/manga-details/manga-details-provider";
import MangaDetailsReview from "../ui/manga-details/manga-details-review";

function MangaDetails() {
  const { mangaId } = useParams();

  const { mangaData, loading, error } = useGraphQLQuery(GET_MANGA, {
    id: parseInt(Array.isArray(mangaId) ? mangaId[0] : mangaId),
  });

  if (loading) return;
  if (error) return <div>{error.message}</div>;
  if (mangaData.length === 0) return notFound();

  const {
    id,
    title,
    staff,
    status,
    startDate,
    genres,
    chapters,
    description,
    bannerImage,
    coverImage,
    rankings,
    averageScore,
    recommendations,
  } = mangaData[0];

  const popularity = rankings.find(
    (ranking) => ranking.context === "most popular all time"
  )?.rank;

  const authors = extractAuthors(staff);

  return (
    <div className="text-foreground">
      <MangaBackgroundImage src={bannerImage} />
      <MangaMetaData
        src={coverImage?.large}
        popularity={popularity}
        averageScore={averageScore}
        title={title.english ? title.english : title.romaji}
        authors={authors}
        status={status}
        startDate={startDate}
        genres={genres}
        chapters={chapters}
      />
      <MangaDetailsProvider>
        <MangaSection description={description} />
        <RecommendedMangaCards id={id} />
        <MangaDetailsReview />
      </MangaDetailsProvider>
    </div>
  );
}

export default MangaDetails;

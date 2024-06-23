"use client";
import { GET_MANGA } from "@/lib/queries";
import { extractAuthors } from "@/lib/utils";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import { notFound, useParams } from "next/navigation";
import MangaSection from "@/components/ui/manga-details/manga-section";
import MangaMetaData from "@/components/ui/manga-details/manga-meta-data";
import MangaDetailsReview from "@/components/ui/manga-details/manga-details-review";
import MangaBackgroundImage from "@/components/image/manga-background-image";
import MangaDetailsProvider from "@/components/ui/manga-details/manga-details-provider";
import RecommendedMangaCards from "@/components/ui/manga-details/recommended-manga-card";

function MangaDetailsPage() {
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
    reviews,
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
        <RecommendedMangaCards id={id} recommendations={recommendations} />
        <MangaDetailsReview reviews={reviews} />
      </MangaDetailsProvider>
    </div>
  );
}

export default MangaDetailsPage;

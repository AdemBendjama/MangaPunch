"use client";
import { GET_MANGA } from "@/lib/queries";
import { extractAuthors } from "@/lib/utils";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import { notFound, useParams } from "next/navigation";
import Description from "@/components/ui/description/description";
import MangaBackgroundImage from "@/components/image/manga-background-image";
import Recommendations from "@/components/ui/recommendations/recommendations";
import MangaMetaData from "@/components/ui/manga-meta-data/manga-meta-data";
import Reviews from "@/components/ui/reviews/reviews";
import WriteReview from "@/components/forms/write-review";

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
      {bannerImage ? (
        <MangaBackgroundImage src={bannerImage} />
      ) : (
        <div className="h-[16rem] dark:bg-background"></div>
      )}
      <div className="bg-background-secondary lg:pb-[1rem]">
        <MangaMetaData
          coverImage={coverImage?.extraLarge}
          popularity={popularity}
          averageScore={averageScore}
          title={title.english ? title.english : title.romaji}
          authors={authors}
          status={status}
          startDate={startDate}
          genres={genres}
          chapters={chapters}
          titles={title}
        />
      </div>
      <div className="bg-background">
        <div className="flex flex-col gap-[1rem] lg:mx-auto lg:w-[63rem] pt-[1rem] pb-[10rem] lg:px-[0] sm:px-[3rem] px-[1rem]">
          <Description description={description} />
          <Recommendations id={id} recommendations={recommendations} />
          <WriteReview />
          <Reviews reviews={reviews} />
        </div>
      </div>
    </div>
  );
}

export default MangaDetailsPage;

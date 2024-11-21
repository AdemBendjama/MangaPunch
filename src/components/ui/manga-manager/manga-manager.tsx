"use client";
import { useInView } from "react-intersection-observer";
import { Suspense, useEffect, useState } from "react";
import FetchManga from "./fetch-manga";
import { LibraryData } from "@/app/user/library/page";

function MangaManager({
  query,
  perPage,
  cardType,
  infiniteScroll,
  variables,
  hover,
  data,
}: {
  query: { name: string; body: string };
  perPage: number;
  cardType: "large" | "regular" | "small";
  infiniteScroll?: boolean;
  variables?: { [key: string]: string | number | number[] };
  hover?: boolean;
  data?: LibraryData[];
}) {
  const { ref, inView } = useInView();
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number[]>([1]);
  const [hasReachedLimit, setHasReachedLimit] = useState<boolean>(false);

  const handleLimitReached = () => {
    setHasReachedLimit(true);
  };

  useEffect(() => {
    if (inView) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (page > 1) {
      setPages((prevPages) => [...prevPages, page]);
    }
  }, [page]);

  return (
    <>
      {pages.map((page) => (
        <Suspense key={page}>
          <FetchManga
            variables={variables}
            page={page}
            perPage={perPage}
            query={query}
            cardType={cardType}
            toggleLimitReached={handleLimitReached}
            hover={hover}
            data={data}
          />
        </Suspense>
      ))}

      {!hasReachedLimit && infiniteScroll && <div ref={ref} />}
    </>
  );
}

export default MangaManager;

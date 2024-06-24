"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import FetchManga from "./fetch-manga";

function MangaManager({
  query,
  perPage,
}: {
  query: { name: string; body: string };
  perPage: number;
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
        <FetchManga
          key={page}
          page={page}
          perPage={perPage}
          query={query}
          toggleLimitReached={handleLimitReached}
        />
      ))}

      {!hasReachedLimit && <div ref={ref} />}
    </>
  );
}

export default MangaManager;

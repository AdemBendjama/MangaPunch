"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import MangaCards from "./manga-cards";

function MangaCollection() {
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
      <div className="grid lg:grid-cols-[repeat(5,_176px)] md:grid-cols-[repeat(5,_16vw)] grid-cols-[repeat(3,_28vw)] gap-y-[1.25rem] pb-[1.25rem] justify-between items-stretch">
        {pages.map((page) => (
          <MangaCards
            key={page}
            page={page}
            perPage={50}
            toggleLimitReached={handleLimitReached}
          />
        ))}
      </div>

      {!hasReachedLimit && <div ref={ref} />}
    </>
  );
}

export default MangaCollection;

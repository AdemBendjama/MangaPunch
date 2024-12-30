"use client";
import { useEffect, useState } from "react";
import { MangaDex } from "./types";
import { normalizeTitletoEmptySpace, normalizeTitletoSpace } from "./utils";

function useMangaDex(titles?: {
  romaji: string;
  english: string | null;
  native: string | null;
}) {
  const [mangaDexData, setMangaDexData] = useState<MangaDex[]>([]);
  const [latestChapter, setLatestChapter] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!titles) return;
    setLoading(true);
    const cachedData = localStorage.getItem(`${titles.romaji}`);
    const cachedTimestamp = localStorage.getItem(`${titles.romaji}_timestamp`);
    if (cachedData && cachedTimestamp) {
      const parsedData = JSON.parse(cachedData);
      const timestamp = parseInt(cachedTimestamp, 10);
      const now = new Date().getTime();
      const timeDiff = now - timestamp;

      if (timeDiff < 3 * 60 * 60 * 1000) {
        setMangaDexData(parsedData.data);
        setLatestChapter(parsedData.latestChapter);
        setLoading(false);
        return;
      }
    }

    const fetchByTitle = async (title: string): Promise<MangaDex[]> => {
      try {
        const response = await fetch(
          `/api/manga?title=${encodeURIComponent(title)}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch manga: ${response.status}`);
        }

        const { data } = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    };

    const fetchLatestChapter = async (id: string): Promise<string> => {
      try {
        const response = await fetch(
          `/api/manga/latest_chapter?id=${encodeURIComponent(id)}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch manga: ${response.status}`);
        }

        const latest_chapter = await response.json();

        return latest_chapter;
      } catch (error) {
        throw error;
      }
    };

    const fetchData = async () => {
      try {
        let data: MangaDex[] = [];
        // search by native naming first like ワンピース
        if (titles.native) data = await fetchByTitle(titles.native);

        // search by romaji format like Kokoro Himeru no Zen Himitsu
        if (data.length === 0) data = await fetchByTitle(titles.romaji);

        // normilazation fo title required since some title has '-' which can affect results
        if (data.length === 0)
          data = await fetchByTitle(normalizeTitletoEmptySpace(titles.romaji));

        if (data.length === 0)
          data = await fetchByTitle(normalizeTitletoSpace(titles.romaji));

        const latestChapter = await fetchLatestChapter(data[0].id);

        return { data, latestChapter };
      } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error(
          "Too Many Requests: We're momentarily overwhelmed. Please try again shortly."
        );
      }
    };

    fetchData()
      .then((data) => {
        localStorage.setItem(`${titles.romaji}`, JSON.stringify(data));
        localStorage.setItem(
          `${titles.romaji}_timestamp`,
          String(new Date().getTime())
        );
        setMangaDexData(data.data);
        setLatestChapter(data.latestChapter);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("Unknown error occurred"));
        }
        setLoading(false);
      });
  }, [titles]);

  return { mangaDexData, latestChapter, loading, error };
}

export default useMangaDex;

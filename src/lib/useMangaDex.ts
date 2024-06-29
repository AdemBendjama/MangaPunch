import { useEffect, useState } from "react";
import { MangaDex } from "./types";
import { useSearchParams } from "next/navigation";
import { formatTitle } from "./utils";

function useMangaDex(query: string) {
  const [mangaDexData, setMangaDexData] = useState<MangaDex[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const cachedData = localStorage.getItem(`${query}`);
    const cachedTimestamp = localStorage.getItem(`${query}_timestamp`);
    if (cachedData && cachedTimestamp) {
      const parsedData = JSON.parse(cachedData);
      const timestamp = parseInt(cachedTimestamp, 10);
      const now = new Date().getTime();
      const timeDiff = now - timestamp;

      if (timeDiff < 3 * 60 * 60 * 1000) {
        setMangaDexData(parsedData);
        setLoading(false);
        return;
      }
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.mangadex.org/manga?title=${query}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const { data } = await response.json();
        console.log(data);

        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error(
          "Too Many Requests: We're momentarily overwhelmed. Please try again shortly."
        );
      }
    };

    fetchData()
      .then((data) => {
        localStorage.setItem(`${query}`, JSON.stringify(data));
        localStorage.setItem(
          `${query}_timestamp`,
          String(new Date().getTime())
        );
        setMangaDexData(data);
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
  }, [searchParams]);

  return { mangaDexData, loading, error };
}

export default useMangaDex;

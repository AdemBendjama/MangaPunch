import { useEffect, useState } from "react";
import { Manga } from "./types";

function useGraphQLQuery(
  query: { name: string; body: string },
  variables?: { [key: string]: string | number }
) {
  const [mangaData, setMangaData] = useState<Manga[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const varParams = variables
    ? `_${new URLSearchParams(
        Object.entries(variables).map(([key, value]) => [key, value.toString()])
      )}`
    : "";

  useEffect(() => {
    const cachedData = localStorage.getItem(`${query.name}${varParams}`);
    const cachedTimestamp = localStorage.getItem(
      `${query.name}${varParams}_timestamp`
    );
    if (cachedData && cachedTimestamp) {
      const parsedData = JSON.parse(cachedData);
      const timestamp = parseInt(cachedTimestamp, 10);
      const now = new Date().getTime();
      const timeDiff = now - timestamp;

      if (timeDiff < 3 * 60 * 60 * 1000) {
        setMangaData(parsedData);
        setLoading(false);
        return;
      }
    }

    const fetchData = async () => {
      try {
        const response = await fetch("https://graphql.anilist.co", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: query.body,
            variables: variables || {},
          }),
        });
        const { data, errors } = await response.json();

        if (errors) {
          throw new Error(errors);
        }

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
        setMangaData(data.Page.media);
        setLoading(false);
        localStorage.setItem(
          `${query.name}${varParams}`,
          JSON.stringify(data.Page.media)
        );
        localStorage.setItem(
          `${query.name}${varParams}_timestamp`,
          String(new Date().getTime())
        );
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("Unknown error occurred"));
        }
        setLoading(false);
      });
  }, []);

  return { mangaData, loading, error };
}

export default useGraphQLQuery;

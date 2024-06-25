"use server";
import { GET_MANGA_SEARCH } from "@/lib/queries";
import { Manga } from "@/lib/types";
import { GraphQLError } from "graphql";

export async function getSearch(
  search: string
): Promise<{ data: Manga[] | null; errors: GraphQLError[] | null }> {
  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_MANGA_SEARCH.body,
      variables: { search: search.toString() },
    }),
  });
  const { data, errors } = await response.json();

  if (errors) {
    return { data: null, errors: errors };
  }

  return { data: data.Page.media, errors: null };
}

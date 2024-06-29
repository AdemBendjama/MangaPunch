import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");

  if (!title) {
    return NextResponse.json(
      { error: "Title query parameter is required" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://api.mangadex.org/manga?title=${encodeURIComponent(
        title
      )}&order[relevance]=desc`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch manga: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching manga:", error);
    return NextResponse.json(
      { error: "Failed to fetch manga" },
      { status: 500 }
    );
  }
}

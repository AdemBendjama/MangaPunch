import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Id query parameter is required" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://api.mangadex.org/manga/${encodeURIComponent(
        id
      )}/feed?translatedLanguage[]=en&order[chapter]=desc&limit=1`,
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
    const latestChapter = data.data[0].attributes.chapter;

    return NextResponse.json(latestChapter);
  } catch (error) {
    console.error("Error fetching manga:", error);
    return NextResponse.json(
      { error: "Failed to fetch manga" },
      { status: 500 }
    );
  }
}

// `/api/manga/${encodeURIComponent(
//             id
//           )}/feed?translatedLanguage[]=en&order[chapter]=desc&limit=1`,

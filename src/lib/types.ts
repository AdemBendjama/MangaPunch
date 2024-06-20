export interface Manga {
  id: number;
  title: {
    romaji: string;
    english: string | null;
    native: string | null;
  };
  coverImage: {
    medium: string;
    large: string;
    extraLarge: string;
  };
  genres: string[];
  tags: {
    name: string;
  }[];
  description: string | null;
  startDate: {
    year: number;
    month: number;
    day: number;
  } | null;
  endDate: {
    year: number;
    month: number;
    day: number;
  } | null;
  averageScore: number | null;
  popularity: number | null;
  chapters: number | null;
  volumes: number | null;
  status: string | null;
  siteUrl: string | null;
  isAdult: boolean | null;
}

export interface PageData {
  Page: {
    media: Manga[];
  };
}

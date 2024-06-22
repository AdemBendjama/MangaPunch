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
  bannerImage: string | null;
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
  rankings: [
    {
      rank: number;
      type: string;
      context: string;
    }
  ];
  averageScore: number | null;
  popularity: number | null;
  chapters: number | null;
  volumes: number | null;
  status: string | null;
  siteUrl: string | null;
  isAdult: boolean | null;
  staff: {
    edges: [
      {
        node: {
          name: {
            full: string;
          };
        };
        role: string;
      }
    ];
  } | null;
}

export interface PageData {
  Page: {
    media: Manga[];
  };
}

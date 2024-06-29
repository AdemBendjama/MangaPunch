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
  recommendations: Recommendations;
  reviews: Reviews;
}

export interface Review {
  node: {
    id: number;
    summary: string;
    user: {
      id: number;
      name: string;
      avatar: {
        large: string;
        medium: string;
      };
    };
  };
}

export interface Reviews {
  edges: Review[];
}

export interface Recommendation {
  node: {
    id: number;
    mediaRecommendation: Manga;
  };
}

export interface Recommendations {
  edges: Recommendation[];
}

export interface PageData {
  Page: {
    media: Manga[];
  };
}

export enum format {
  MANGA = "MANGA",
  ONE_SHOT = "ONE_SHOT",
  NOVEL = "NOVEL",
}
export enum status {
  FINISHED = "FINISHED",
  RELEASING = "RELEASING",
  NOT_YET_RELEASED = "NOT_YET_RELEASED",
  CANCELLED = "CANCELLED",
  HIATUS = "HIATUS",
}

export enum country {
  JP = "JP",
  KR = "KR",
  CN = "CN",
  TW = "TW",
}

export type FilterItem = {
  label: string;
  value: status | format | string | number;
};

export type FormSelectFields = {
  name: "genre" | "format" | "year" | "status" | "country";
  label: string;
  items: FilterItem[];
};

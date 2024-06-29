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

export enum sort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  TITLE_ROMAJI = "TITLE_ROMAJI",
  TITLE_ROMAJI_DESC = "TITLE_ROMAJI_DESC",
  TITLE_ENGLISH = "TITLE_ENGLISH",
  TITLE_ENGLISH_DESC = "TITLE_ENGLISH_DESC",
  TITLE_NATIVE = "TITLE_NATIVE",
  TITLE_NATIVE_DESC = "TITLE_NATIVE_DESC",
  TYPE = "TYPE",
  TYPE_DESC = "TYPE_DESC",
  FORMAT = "FORMAT",
  FORMAT_DESC = "FORMAT_DESC",
  START_DATE = "START_DATE",
  START_DATE_DESC = "START_DATE_DESC",
  END_DATE = "END_DATE",
  END_DATE_DESC = "END_DATE_DESC",
  SCORE = "SCORE",
  SCORE_DESC = "SCORE_DESC",
  POPULARITY = "POPULARITY",
  POPULARITY_DESC = "POPULARITY_DESC",
  TRENDING = "TRENDING",
  TRENDING_DESC = "TRENDING_DESC",
  EPISODES = "EPISODES",
  EPISODES_DESC = "EPISODES_DESC",
  DURATION = "DURATION",
  DURATION_DESC = "DURATION_DESC",
  STATUS = "STATUS",
  STATUS_DESC = "STATUS_DESC",
  CHAPTERS = "CHAPTERS",
  CHAPTERS_DESC = "CHAPTERS_DESC",
  VOLUMES = "VOLUMES",
  VOLUMES_DESC = "VOLUMES_DESC",
  UPDATED_AT = "UPDATED_AT",
  UPDATED_AT_DESC = "UPDATED_AT_DESC",
  SEARCH_MATCH = "SEARCH_MATCH",
  FAVOURITES = "FAVOURITES",
  FAVOURITES_DESC = "FAVOURITES_DESC",
}

export type FilterItem = {
  label: string;
  value: string | number;
};

export type FormSelectFields = {
  name: "genre" | "format" | "year" | "status" | "country";
  label: string;
  items: FilterItem[];
};

export interface MangaDex {
  id: string; // Unique identifier for the manga
  type: string; // Type of the manga (e.g., manga, novel)
  attributes: {
    title: {
      en?: string; // English title
      ja?: string; // Japanese title
      ["en_jp"]?: string; // English (Japanized) title
    };
    altTitles?: {
      [lang: string]: string[]; // Alternative titles in various languages
    };
    description?: {
      en?: string; // English description
      ja?: string; // Japanese description
      ["en_jp"]?: string; // English (Japanized) description
    };
    isLocked?: boolean; // Indicates if the manga is locked (e.g., mature content)
    links?: {
      [site: string]: string; // External links related to the manga
    };
    originalLanguage: string; // Original language of the manga (e.g., Japanese)
    lastVolume?: string; // Last published volume
    lastChapter?: string; // Last published chapter
    publicationDemographic?: string; // Publication demographic (e.g., shounen, seinen)
    status?: string; // Publication status (e.g., ongoing, completed)
    year?: number; // Year of publication
    tags?: {
      id: string; // Tag ID
      type: string; // Tag type (e.g., genre, theme)
      attributes: {
        name: {
          en?: string; // English tag name
          ja?: string; // Japanese tag name
          ["en_jp"]?: string; // English (Japanized) tag name
        };
      };
    }[];
    createdAt?: string; // Date when the manga entry was created
    updatedAt?: string; // Date when the manga entry was last updated
    coverArt?: string; // URL to the manga's cover art
    bannerImage?: string; // URL to the manga's banner image
    chapters?: string[]; // Array of chapter IDs
    volumes?: string[]; // Array of volume IDs
  };
}

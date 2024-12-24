type LibraryData = {
  id: number;
  status: "planning" | "reading" | "completed";
  chapter: number;
  rating: number;
};

type MongodbUser = {
  _id: string;
  email: string;
  username: string;
  password: string;
  image: string | null;
  hasPassword: boolean;
  verified: boolean;
  library: LibraryData[];
};

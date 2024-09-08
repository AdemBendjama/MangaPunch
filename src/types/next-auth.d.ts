import NextAuth, { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string | null;
      hasPassword: boolean;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image: string | null;
    hasPassword: boolean;
  }
}

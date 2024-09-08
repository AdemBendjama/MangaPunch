import { MongoClient, ServerApiVersion } from "mongodb";
import { Account, NextAuthOptions, User } from "next-auth";

import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        //
        try {
          const email = credentials?.email;
          const password = credentials?.password;
          if (!(email && password)) {
            return null;
          }

          //
          await client.connect();
          const user = await client
            .db("mangapunch")
            .collection("users")
            .findOne({ email: email });
          await client.close();
          if (!user) {
            return null;
          }

          const emailVerified = user.verified;
          if (!emailVerified) {
            return null;
          }

          //
          const comparedPasswords = await bcrypt.compare(
            password,
            user.password
          );
          if (!comparedPasswords) {
            return null;
          }

          return {
            id: user._id.toString(),
            name: user.username,
            email: email,
            image: null,
            hasPassword: user.hasPassword,
          };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: User | AdapterUser;
      account: Account | null;
    }) {
      if (account?.provider !== "credentials") {
        try {
          //
          await client.connect();
          const db = client.db("mangapunch").collection("users");
          //
          const userDb = await db.findOne({ email: user.email });

          if (!userDb) {
            const res = await db.insertOne({
              email: user.email,
              username: user.name,
              image: user.image,
              hasPassword: false,
            });

            user.id = res.insertedId.toString();
          } else {
            // if user exists use the data stored in the mongodb database
            // replace only data that changes like name and image
            // or in case of id to use the id from mongodb
            user.id = userDb._id.toString();
            user.name = userDb.username;
            user.image = userDb.image;
          }
          user.hasPassword = false;
        } catch (error) {
          console.log(error);
          return false;
        } finally {
          await client.close();
        }
      }
      return true;
    },

    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;

      return session;
    },
  },
};

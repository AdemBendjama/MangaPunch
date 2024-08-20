import { MongoClient, ServerApiVersion } from "mongodb";
import NextAuth, { Account, Session, User } from "next-auth";

import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import bcrypt from "bcrypt";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const authOptions = {
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

          return { id: user._id.toString(), name: user.username, email: email };
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
          const userExists = await db.findOne({ email: user.email });

          if (!userExists) {
            await db.insertOne({
              username: user.name,
              email: user.email,
              valid: true,
              hasPassword: false,
            });
          }
        } catch (error) {
          console.log(error);
          return false;
        } finally {
          await client.close();
        }
      }
      return true;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      await client.connect();
      const db = client.db("mangapunch");

      const user = await db.collection("users").findOne({ email: token.email });
      if (user) {
        session.user.id = user._id.toString();
        session.user.name = user.username;
        session.user.email = user.email;
        session.user.hasPassword = user.hasPassword;
      }

      await client.close();

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

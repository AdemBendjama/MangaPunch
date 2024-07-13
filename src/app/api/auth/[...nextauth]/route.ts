import NextAuth, { User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient, ServerApiVersion } from "mongodb";
import bcrypt from "bcrypt";
const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const authOptions = {
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

"use server";

import { LibraryData } from "@/app/user/library/page";
import { authOptions } from "@/lib/auth";
import { client } from "@/lib/mongodbClient";
import { getServerSession } from "next-auth";

export const fetchLibrary = async (): Promise<LibraryData[]> => {
  const session = await getServerSession(authOptions);
  if (!session) return [];
  const { email } = session.user;
  try {
    await client.connect();

    const user = await client
      .db("mangapunch")
      .collection("users")
      .findOne({ email }, { projection: { library: 1 } });

    if (!user || !user.library) {
      return [];
    }

    return user.library;
  } catch (error) {
    console.error("Error fetching library data:", error);
    throw new Error(
      "Too Many Requests: We're momentarily overwhelmed. Please try again shortly."
    );
  } finally {
    await client.close();
  }
};

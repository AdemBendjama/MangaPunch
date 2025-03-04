"use server";

import { authOptions } from "@/lib/auth";
import { client } from "@/lib/mongodbClient";
import { Collection } from "mongodb";
import { getServerSession } from "next-auth";

export const fetchLibrary = async (): Promise<LibraryData[]> => {
  const session = await getServerSession(authOptions);
  if (!session) return [];
  const { email } = session.user;
  try {
    await client.connect();

    const users: Collection<MongodbUser> = client
      .db("mangapunch")
      .collection("users");

    const user = await users.findOne({ email }, { projection: { library: 1 } });

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

export const fetchLibraryItem = async (
  id: number
): Promise<LibraryData | null> => {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  const { email } = session.user;
  try {
    await client.connect();

    const users: Collection<MongodbUser> = client
      .db("mangapunch")
      .collection("users");

    const user = await users.findOne(
      { email, "library.id": id },
      { projection: { "library.$": 1 } }
    );

    if (!user || user.library.length === 0) {
      return null;
    }

    return user.library[0];
  } catch (error) {
    console.error("Error fetching library data:", error);
    throw new Error(
      "Too Many Requests: We're momentarily overwhelmed. Please try again shortly."
    );
  } finally {
    await client.close();
  }
};

export const updateLibrary = async (libraryData: LibraryData) => {
  const session = await getServerSession(authOptions);
  if (!session) throw Error("Error retreiving session");
  const { email } = session.user;

  try {
    await client.connect();

    const users = client.db("mangapunch").collection("users");

    await users.updateOne(
      { email },
      {
        $set: {
          "library.$[item].status": libraryData.status,
          "library.$[item].chapter": libraryData.chapter,
          "library.$[item].rating": libraryData.rating,
        },
      },
      {
        arrayFilters: [
          {
            "item.id": libraryData.id,
          },
        ],
      }
    );
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
};

export const removelibrary = async (id: number) => {
  const session = await getServerSession(authOptions);
  if (!session) throw Error("Error retreiving session");
  const { email } = session.user;

  try {
    await client.connect();

    const users: Collection<MongodbUser> = client
      .db("mangapunch")
      .collection("users");

    await users.updateOne(
      { email },
      {
        $pull: {
          library: { id },
        },
      }
    );
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
};

export const addLibrary = async (id: number) => {
  const session = await getServerSession(authOptions);
  if (!session) throw Error("Error retreiving session");
  const { email } = session.user;

  try {
    await client.connect();

    const users: Collection<MongodbUser> = client
      .db("mangapunch")
      .collection("users");

    await users.updateOne(
      { email },
      {
        $addToSet: {
          library: {
            id,
            status: "planning",
            chapter: 0,
            rating: 0,
          },
        },
      }
    );
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
};

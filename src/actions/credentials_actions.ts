"use server";

import { getServerSession } from "next-auth";
import bcrypt from "bcrypt";
import { client } from "@/lib/mongodbClient";

export async function updateUsername(formData: { username: string }): Promise<{
  error: { type: "internal"; message: string } | null;
}> {
  try {
    const session = await getServerSession();
    if (!session) {
      return { error: { type: "internal", message: "Not logged in" } };
    }
    await client.connect();

    const userCollection = client.db("mangapunch").collection("users");

    const user = await userCollection.findOne({ email: session.user.email });

    if (!user) {
      return { error: { type: "internal", message: "User Doesnt Exist" } };
    }

    const result = await userCollection.updateOne(
      { email: session.user.email },
      {
        $set: {
          username: formData.username,
        },
      }
    );

    if (result.matchedCount === 0 && result.modifiedCount === 0) {
      return {
        error: {
          type: "internal",
          message: "Username wasn't updated successfully",
        },
      };
    }

    return { error: null };
  } catch (error) {
    return {
      error: {
        type: "internal",
        message: "Server error, please try again later.",
      },
    };
  } finally {
    await client.close();
  }
}

export async function updatePassword(formData: {
  oldPassword: string;
  newPassword: string;
}): Promise<{
  error: { type: "internal"; message: string } | null;
}> {
  try {
    const session = await getServerSession();
    if (!session) {
      return { error: { type: "internal", message: "Not logged in" } };
    }
    await client.connect();

    const userCollection = client.db("mangapunch").collection("users");

    const user = await userCollection.findOne({ email: session.user.email });

    if (!user) {
      return { error: { type: "internal", message: "User Doesnt Exist" } };
    }

    const comparedPassword = await bcrypt.compare(
      formData.oldPassword,
      user.password
    );

    if (!comparedPassword) {
      return {
        error: { type: "internal", message: "Old Password is Incorrect" },
      };
    }

    const formattedPassword = await bcrypt.hash(formData.newPassword, 10);

    const result = await userCollection.updateOne(
      { email: session.user.email },
      {
        $set: {
          password: formattedPassword,
        },
      }
    );

    if (result.matchedCount === 0 && result.modifiedCount === 0) {
      return {
        error: {
          type: "internal",
          message: "Password wasn't updated successfully",
        },
      };
    }

    return { error: null };
  } catch (error) {
    return {
      error: {
        type: "internal",
        message: "Server error, please try again later.",
      },
    };
  } finally {
    await client.close();
  }
}

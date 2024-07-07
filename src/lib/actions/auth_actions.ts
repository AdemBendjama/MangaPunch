"use server";
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

export async function signup(formData: {
  email: string;
  username: string;
  password: string;
}) {
  try {
    //
    await client.connect();

    const hashedPassword = await bcrypt.hash(formData.password, 10);

    await client
      .db("mangapunch")
      .collection("users")
      .insertOne({ ...formData, password: hashedPassword });

    await client.close();
  } catch (error) {
    throw error;
  }
}

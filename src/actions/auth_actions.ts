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
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
): Promise<void> => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export async function signup(formData: {
  email: string;
  username: string;
  password: string;
}): Promise<{ error: { type: "email" | "internal"; message: string } | null }> {
  try {
    //
    await client.connect();

    const hashedPassword = await bcrypt.hash(formData.password, 10);

    const emailAlreadyExists = await client
      .db("mangapunch")
      .collection("users")
      .findOne({ email: formData.email });

    if (emailAlreadyExists) {
      return {
        error: {
          type: "email",
          message: "An account with this email already exists.",
        },
      };
    }

    await client
      .db("mangapunch")
      .collection("users")
      .insertOne({ ...formData, password: hashedPassword });

    return { error: null };
  } catch (error: any) {
    console.log(error);
    return {
      error: {
        type: "internal",
        message: "Unexpected interal error please try again later",
      },
    };
  } finally {
    await client.close();
  }
}

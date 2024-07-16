"use server";
import { MongoClient, ServerApiVersion } from "mongodb";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_ID || "",
    pass: process.env.GMAIL_SECRET || "",
  },
});

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
): Promise<void> => {
  const mailOptions = {
    from: process.env.GMAIL_ID || "",
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
    await client.connect();

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

    // 6 digit code
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const hashedPassword = await bcrypt.hash(formData.password, 10);
    const hashedVerificationCode = await bcrypt.hash(verificationCode, 10);

    await client
      .db("mangapunch")
      .collection("users")
      .insertOne({
        ...formData,
        password: hashedPassword,
        verificationCode: hashedVerificationCode,
        verified: false,
        hasPassword: true,
        createdAt: new Date(),
      });

    await sendEmail(
      formData.email,
      "Email Verification",
      `<div>
        This is your email verification code: ${verificationCode}.
      </div>
      <div>
        If you don't submit this code after 24 hours it will expire requiring you to signup again to aquire a new code.
      </div>
      `
    );

    return { error: null };
  } catch (error: any) {
    console.log(error);
    return {
      error: {
        type: "internal",
        message: "Unexpected internal error, please try again later",
      },
    };
  } finally {
    await client.close();
  }
}

export async function verifyEmail(formData: {
  email: string;
  code: string;
}): Promise<{
  error: { type: "verification" | "internal"; message: string } | null;
}> {
  try {
    await client.connect();

    const user = await client
      .db("mangapunch")
      .collection("users")
      .findOne({ email: formData.email });

    if (!user) {
      return {
        error: {
          type: "verification",
          message: "Invalid email or verification code.",
        },
      };
    }

    const isCodeValid = await bcrypt.compare(
      formData.code,
      user.verificationCode
    );

    if (!isCodeValid) {
      return {
        error: {
          type: "verification",
          message: "Invalid email or verification code.",
        },
      };
    }

    await client
      .db("mangapunch")
      .collection("users")
      .updateOne(
        { email: formData.email },
        { $set: { verified: true }, $unset: { verificationCode: "" } }
      );

    return { error: null };
  } catch (error: any) {
    console.log(error);
    return {
      error: {
        type: "internal",
        message: "Unexpected internal error, please try again later",
      },
    };
  } finally {
    await client.close();
  }
}

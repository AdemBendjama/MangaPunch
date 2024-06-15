"use client";
import { InputForm } from "./form";
import { z } from "zod";
const FormSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(3, {
      message: "Username must be at least 3 characters.",
    })
    .max(14, {
      message: "Username must not be 16 characters or more.",
    }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirm_password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export function SignUpForm() {
  const formFields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "example@gmail.com",
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Jhon Doe",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      type: "password",
    },
  ];
  return (
    <InputForm
      type="auth"
      FormSchema={FormSchema}
      buttonLabel="Sign Up"
      formFields={formFields}
    />
  );
}

"use client";
import { Suspense } from "react";
import { InputForm } from "./form";
import { z } from "zod";
const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export function SignInForm() {
  const formFields = [
    {
      name: "email",
      label: "Email",
      fieldType: "email",
      placeholder: "example@gmail.com",
    },
    {
      name: "password",
      label: "Password",
      fieldType: "password",
    },
  ];
  return (
    <Suspense>
      <InputForm
        type="auth"
        FormSchema={FormSchema}
        buttonLabel="Log In"
        formFields={formFields}
      />
    </Suspense>
  );
}

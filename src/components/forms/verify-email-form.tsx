"use client";
import { Suspense } from "react";
import { InputForm } from "./form";
import { z } from "zod";
const FormSchema = z.object({
  email: z.string().email(),
  code: z.string().length(6),
});

export function VerifyEmailForm() {
  const formFields = [
    {
      name: "email",
      label: "Email",
      fieldType: "email",
      placeholder: "example@gmail.com",
    },
    {
      name: "code",
      label: "Verification Code",
      fieldType: "number",
      placeholder: "xxx-xxx",
    },
  ];
  return (
    <Suspense>
      <InputForm
        type="auth"
        FormSchema={FormSchema}
        buttonLabel="Verify Email"
        formFields={formFields}
      />
    </Suspense>
  );
}

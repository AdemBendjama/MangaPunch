"use client";

import { InputForm } from "./form";
import { Suspense } from "react";
import { z } from "zod";
const FormSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Username must be at least 3 characters.",
    })
    .max(16, {
      message: "Username must be 16 characters or less.",
    }),
});

export function UpdateUsernameForm({
  username,
}: {
  username: string | null | undefined;
}) {
  const formFields = [
    {
      name: "username",
      label: "Username",
      description: "Enter your new username",
      placeholder: "Jhon Doe",
      fieldType: "text",
    },
  ];
  return (
    <Suspense>
      <InputForm
        type="username"
        defaultValues={{
          username: username || "",
        }}
        FormSchema={FormSchema}
        buttonLabel="Update Username"
        formFields={formFields}
      />
    </Suspense>
  );
}

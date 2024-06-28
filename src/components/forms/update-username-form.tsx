"use client";
import { Suspense } from "react";
import { InputForm } from "./form";
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

export function UpdateUsernameForm() {
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
        type="profile"
        defaultValues={{
          username: "Naden2020",
        }}
        FormSchema={FormSchema}
        buttonLabel="Update Username"
        formFields={formFields}
      />
    </Suspense>
  );
}

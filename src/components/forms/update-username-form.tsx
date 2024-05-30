"use client";
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
      type: "text",
    },
  ];
  return (
    <InputForm
      defaultValues={{
        username: "Naden2020",
      }}
      FormSchema={FormSchema}
      buttonLabel="Update Username"
      formFields={formFields}
    />
  );
}

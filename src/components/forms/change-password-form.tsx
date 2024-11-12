"use client";

import { InputForm } from "./form";
import { Suspense } from "react";
import { z } from "zod";
const FormSchema = z
  .object({
    oldPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    newPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export function ChangePasswordForm() {
  const formFields = [
    {
      name: "oldPassword",
      label: "Old Password",
      description: "Enter your old password",
      fieldType: "password",
    },
    {
      name: "newPassword",
      label: "New Password",
      description: "Enter your new password",
      fieldType: "password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      description: "Re-Enter your new password",
      fieldType: "password",
    },
  ];
  return (
    <Suspense>
      <InputForm
        type="password"
        FormSchema={FormSchema}
        buttonLabel="Change Password"
        formFields={formFields}
      />
    </Suspense>
  );
}

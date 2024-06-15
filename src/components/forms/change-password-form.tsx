"use client";
import { InputForm } from "./form";
import { z } from "zod";
const FormSchema = z
  .object({
    old_password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    new_password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirm_password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export function ChangePasswordForm() {
  const formFields = [
    {
      name: "old_password",
      label: "Old Password",
      description: "Enter your old password",
      type: "password",
    },
    {
      name: "new_password",
      label: "New Password",
      description: "Enter your new password",
      type: "password",
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      description: "Re-Enter your new password",
      type: "password",
    },
  ];
  return (
    <InputForm
      type="profile"
      defaultValues={{
        old_password: "********",
      }}
      FormSchema={FormSchema}
      buttonLabel="Change Password"
      formFields={formFields}
    />
  );
}

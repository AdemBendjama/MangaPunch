"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { signup } from "@/lib/actions/auth_actions";
import { signIn } from "next-auth/react";

export function InputForm({
  type,
  defaultValues,
  FormSchema,
  buttonLabel,
  formFields,
}: {
  type: "auth" | "profile" | "search";
  FormSchema: z.ZodObject<any, any> | z.ZodEffects<z.ZodObject<any, any, any>>;
  buttonLabel?: string;
  formFields: {
    name: string;
    fieldType: string;
    label?: string;
    description?: string;
    placeholder?: string;
    inputClassname?: string;
  }[];
  defaultValues?: {
    username?: string;
    old_password?: string;
  };
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ...defaultValues,
      search: searchParams.get("search") || "",
    },
  });
  const [formError, setFormError] = useState<string | null>(null);
  const searchParamsError = searchParams.get("error");

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    switch (type) {
      case "search":
        const currentParams = new URLSearchParams(searchParams.toString());
        if (formData.search !== "") {
          currentParams.set("search", formData.search);
        } else {
          currentParams.delete("search");
        }
        const newUrl = `${pathname}?${currentParams.toString()}`;

        router.push(newUrl);
      case "auth":
        if (pathname === "/auth/signin") {
          //
          await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: true,
          });
        } else if (pathname === "/auth/signup") {
          await signup({
            email: formData.email,
            username: formData.username,
            password: formData.password,
          }).then((data) => {
            if (data.error) {
              if (data.error.type == "email") {
                form.setError("email", {
                  message: data.error.message,
                });
              } else {
                setFormError(data.error.message);
              }
            } else {
              router.push("/auth/signin");
            }
          });
        }

      case "profile":
    }
  }

  useEffect(() => {
    form.setValue("search", searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        {formFields.map(
          ({
            name,
            label,
            description,
            placeholder,
            fieldType,
            inputClassname,
          }) => {
            return (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem className={type === "search" ? "space-y-0" : ""}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={placeholder}
                        {...field}
                        value={form.getValues(name)}
                        type={fieldType}
                        className={inputClassname}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            form.handleSubmit(onSubmit)();
                          }
                        }}
                      />
                    </FormControl>
                    <FormDescription>{description}</FormDescription>
                    {type !== "search" && <FormMessage />}
                  </FormItem>
                )}
              />
            );
          }
        )}
        {searchParamsError && searchParamsError === "CredentialsSignin" && (
          <div className="w-full pb-[1rem] text-sm font-medium text-form-error">
            <span>
              Sign in failed.
              <br />
              Please check your email and password and try again.
            </span>
          </div>
        )}
        {formError && (
          <div className="w-full pb-[1rem] text-sm font-medium text-form-error">
            {formError}
          </div>
        )}
        {type === "auth" && (
          <div className="w-full pb-[1rem]">
            {pathname === "/auth/signin" && (
              <div className="flex justify-end text-sm text-primary dark:text-primary-bright -mt-[0.75rem] pb-[1.5rem]">
                Forget Password?
              </div>
            )}
            <Button
              type="submit"
              className="w-full font-bold text-base"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : buttonLabel}
            </Button>
          </div>
        )}
        {type === "profile" && (
          <div className="w-full flex justify-end">
            <Button type="submit">{buttonLabel}</Button>
          </div>
        )}
      </form>
    </Form>
  );
}

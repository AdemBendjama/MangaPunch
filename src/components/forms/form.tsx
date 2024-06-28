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
import { useEffect } from "react";

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

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (formData.search !== "") {
      currentParams.set("search", formData.search);
    } else {
      currentParams.delete("search");
    }
    const newUrl = `${pathname}?${currentParams.toString()}`;

    router.push(newUrl);
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
        {type === "auth" && (
          <div className="w-full pb-[1rem]">
            {pathname === "/auth/signin" && (
              <div className="flex justify-end text-sm text-primary dark:text-primary-bright -mt-[0.75rem] pb-[1.5rem]">
                Forget Password?
              </div>
            )}
            <Button type="submit" className="w-full font-bold text-base">
              {buttonLabel}
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

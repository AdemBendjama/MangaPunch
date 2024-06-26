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
import { usePathname } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { getSearch } from "@/actions/getSearch";
import { Dispatch, SetStateAction } from "react";
import { Manga } from "@/lib/types";

export function InputForm({
  type,
  defaultValues,
  FormSchema,
  buttonLabel,
  formFields,
  setSearchData,
  setLoading,
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
  setSearchData?: Dispatch<SetStateAction<Manga[] | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const { toast } = useToast();
  const pathname = usePathname();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultValues,
  });

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    if (formData["search"] && setSearchData) {
      setLoading(true);
      const { data, errors } = await getSearch(formData.search);
      setLoading(false);
      if (errors) {
        errors.forEach((error) => {
          console.log(error.message);
        });
      }
      if (data) {
        setSearchData(data);
      }
    }
  }

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

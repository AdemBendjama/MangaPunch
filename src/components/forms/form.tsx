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
import { toast } from "@/components/ui/use-toast";
import { usePathname } from "next/navigation";

export function InputForm({
  type,
  defaultValues,
  FormSchema,
  buttonLabel,
  formFields,
}: {
  type: "auth" | "profile";
  FormSchema: z.ZodObject<any, any> | z.ZodEffects<z.ZodObject<any, any, any>>;
  buttonLabel: string;
  formFields: {
    name: string;
    label: string;
    description?: string;
    placeholder?: string;
    type: string;
  }[];
  defaultValues?: {
    username?: string;
    old_password?: string;
  };
}) {
  const pathname = usePathname();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        {formFields.map(({ name, label, description, placeholder, type }) => {
          return (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={placeholder}
                      {...field}
                      className="border-0"
                      type={type}
                    />
                  </FormControl>
                  <FormDescription>{description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
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

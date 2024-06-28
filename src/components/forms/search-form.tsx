"use client";
import { Suspense } from "react";
import { InputForm } from "./form";
import { z } from "zod";
const FormSchema = z.object({
  search: z.string().optional(),
});

export function SearchForm() {
  const formFields = [
    {
      name: "search",
      fieldType: "search",
      inputClassname: `flex justify-start items-center mt-[0px]
            sm:w-[29rem] w-full h-[3rem] p-[0.5rem] rounded-none border-0 
            bg-background-secondary dark:bg-background text-black dark:text-foreground`,
    },
  ];
  return (
    <Suspense>
      <InputForm
        type="search"
        FormSchema={FormSchema}
        formFields={formFields}
      />
    </Suspense>
  );
}

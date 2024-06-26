"use client";
import { Dispatch, SetStateAction } from "react";
import { Manga } from "@/lib/types";
import { InputForm } from "./form";
import { z } from "zod";
const FormSchema = z.object({
  search: z.string(),
});

export function SearchForm({
  setSearchData,
  setLoading,
}: {
  setSearchData: Dispatch<SetStateAction<Manga[] | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) {
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
    <InputForm
      type="search"
      FormSchema={FormSchema}
      formFields={formFields}
      setSearchData={setSearchData}
      setLoading={setLoading}
    />
  );
}

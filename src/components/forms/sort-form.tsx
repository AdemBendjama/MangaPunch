"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  countryItems,
  formatItems,
  genreItems,
  sortItems,
  statusItems,
  yearItems,
} from "@/lib/filter-data";
import { FormSelectFields, sort } from "@/lib/types";
import { useEffect } from "react";

const FormSchema = z.object({
  sort: z.string(),
});
export function SortForm() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasNoSearchParams = !searchParams.toString();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      sort: hasNoSearchParams
        ? ""
        : searchParams.get("sort") || sort.POPULARITY_DESC,
    },
  });
  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    const currentParams = new URLSearchParams(searchParams.toString());

    if (formData.sort !== "") {
      currentParams.set("sort", formData.sort);
    } else {
      currentParams.delete("sort");
    }

    const newUrl = `${pathname}?${currentParams.toString()}`;
    router.push(newUrl);
  }

  useEffect(() => {
    form.setValue(
      "sort",
      hasNoSearchParams ? "" : searchParams.get("sort") || sort.POPULARITY_DESC
    );
  }, [searchParams]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full pb-[2rem] sm:px-0 px-[1rem] justify-end"
      >
        <FormField
          key="sort"
          name="sort"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-[0.375rem] space-y-0">
              <div className="w-fit">
                <Select
                  value={form.getValues("sort")}
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.handleSubmit(onSubmit)();
                  }}
                  defaultValue={field.value}
                >
                  <FormControl className="lg:w-[10.875rem] md:w-[8.5rem] sm:w-[7rem] w-[37vw] md:text-sm text-xs">
                    <SelectTrigger>
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {sortItems.map((item) => (
                        <SelectItem
                          key={item.value}
                          value={item.value.toString()}
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

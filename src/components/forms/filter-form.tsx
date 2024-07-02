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
  statusItems,
  yearItems,
} from "@/lib/filter-data";
import { FormSelectFields } from "@/lib/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./select-slider.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useFilterContext } from "@/context/filter-context-provider";

const formSelectFields: FormSelectFields[] = [
  {
    name: "genre",
    label: "Genre",
    items: genreItems,
  },
  {
    name: "format",
    label: "Format",
    items: formatItems,
  },
  {
    name: "year",
    label: "Year",
    items: yearItems,
  },
  {
    name: "status",
    label: "Publishing Status",
    items: statusItems,
  },
  {
    name: "country",
    label: "Country of Origin",
    items: countryItems,
  },
];

const FormSchema = z.object({
  genre: z.string(),
  format: z.string(),
  year: z.string(),
  status: z.string(),
  country: z.string(),
});
var settings = {
  infinite: false,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};

export function FilterForm() {
  const { toggleFilterOpen } = useFilterContext();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      genre: searchParams.get("genre") || "",
      format: searchParams.get("format") || "",
      year: searchParams.get("year") || "",
      status: searchParams.get("status") || "",
      country: searchParams.get("country") || "",
    },
  });

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    const currentParams = new URLSearchParams(searchParams.toString());

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== "") {
        currentParams.set(key, value);
      } else {
        currentParams.delete(key);
      }
    });

    const newUrl = `${pathname}?${currentParams.toString()}`;
    router.push(newUrl);
  }

  useEffect(() => {
    form.setValue("genre", searchParams.get("genre") || "");
    form.setValue("format", searchParams.get("format") || "");
    form.setValue("year", searchParams.get("year") || "");
    form.setValue("status", searchParams.get("status") || "");
    form.setValue("country", searchParams.get("country") || "");
  }, [searchParams]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="sm:flex w-full pb-[2rem] justify-between hidden"
      >
        {formSelectFields.map(({ name, label, items }) => {
          return (
            <FormField
              key={name}
              name={name}
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-[0.375rem] space-y-0">
                  <FormLabel className="font-medium md:text-base text-sm">
                    {label}
                  </FormLabel>
                  <div className="w-fit">
                    <Select
                      value={form.getValues(name)}
                      onValueChange={(value) => {
                        field.onChange(value);
                        form.handleSubmit(onSubmit)();
                      }}
                      defaultValue={field.value}
                      onOpenChange={toggleFilterOpen}
                    >
                      <FormControl className="lg:w-[10.875rem] md:w-[8.5rem] sm:w-[7rem] w-[37vw] md:text-sm text-xs">
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          {items.map((item) => (
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
          );
        })}
      </form>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full px-[4.5vw] pb-[2rem] sm:hidden select-slider-container"
      >
        <Slider {...settings} className="w-full py-[0.5rem]">
          {formSelectFields.map(({ name, label, items }) => {
            return (
              <FormField
                key={name}
                name={name}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-[0.375rem] space-y-0">
                    <FormLabel className="font-medium md:text-base text-sm">
                      {label}
                    </FormLabel>
                    <div className="w-fit">
                      <Select
                        value={form.getValues(name)}
                        onValueChange={(value) => {
                          field.onChange(value);
                          form.handleSubmit(onSubmit)();
                        }}
                        defaultValue={field.value}
                        onOpenChange={toggleFilterOpen}
                      >
                        <FormControl className="lg:w-[10.875rem] md:w-[8.5rem] sm:w-[7rem] w-[37vw] md:text-sm text-xs">
                          <SelectTrigger>
                            <SelectValue placeholder="Any" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            {items.map((item) => (
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
            );
          })}
        </Slider>
      </form>
    </Form>
  );
}

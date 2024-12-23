import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import XIcon from "@/components/icons/x-icon";
import { LibraryData } from "@/app/user/library/page";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../fields/input-field";
import { Form } from "../form";
import SelectField from "../fields/select-field";

const schema = z.object({
  status: z.enum(["planning", "reading", "completed"]),
  chapter: z.number().min(0),
  rating: z.number().min(0).max(10),
});

type TEditLibrary = z.infer<typeof schema>;

export function CardWithForm({
  onClose,
  trackedData,
}: {
  onClose: () => void;
  trackedData?: Omit<LibraryData, "id">;
}) {
  const form = useForm<TEditLibrary>({
    resolver: zodResolver(schema),
    defaultValues: {
      status: trackedData?.status ? trackedData.status : "planning",
      chapter: trackedData?.chapter ? trackedData.chapter : 0,
      rating: trackedData?.rating ? trackedData.rating : 0,
    },
  });

  const { control, handleSubmit, watch } = form;

  const onSubmit: SubmitHandler<TEditLibrary> = (data) => {
    console.log("data :", data);
  };

  return (
    <Card className="sm:w-[400px] w-[91vw] relative">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <XIcon
            className="w-[1.5rem] h-[1.5rem] m-[0.375rem] absolute right-0 stroke-foreground cursor-pointer hover:opacity-70"
            onClick={onClose}
          />
          <CardHeader>
            {/* <CardTitle></CardTitle> */}
            <CardDescription>
              Make sure you save your changes after editing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <SelectField
                control={control}
                name="status"
                options={[
                  { value: "planning", label: "Planning" },
                  { value: "reading", label: "Reading" },
                  { value: "completed", label: "Completed" },
                ]}
                label="Status"
              />
              <InputField
                control={control}
                name="chapter"
                type="number"
                placeholder="Enter current chapter"
                label="Chapter"
                showErrors
              />
              <InputField
                control={control}
                name="rating"
                type="number"
                placeholder="Enter rating"
                label="Rating"
                showErrors
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="xs:text-sm text-xs xs:p-[1rem] p-[0.5rem]">
              Save Changes
            </Button>
            <Button
              className="xs:text-sm text-xs xs:p-[1rem] p-[0.5rem]"
              variant="destructive"
            >
              Remove from Library
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLibrary } from "@/actions/library_actions";
import { toast } from "sonner";

const options: { value: LibraryData["status"]; label: string }[] = [
  { value: "planning", label: "Planning" },
  { value: "reading", label: "Reading" },
  { value: "completed", label: "Completed" },
];

function ChangeStatusButton({ data }: { data: LibraryData }) {
  const [field, setField] = useState(data.status);
  const queryclient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: LibraryData) => updateLibrary(data),
    mutationKey: ["updateLibrary"],
    onSuccess: () => {
      toast.success("Updated Successfully");
      queryclient.invalidateQueries({ queryKey: ["library"] });
      queryclient.invalidateQueries({
        queryKey: ["libraryItem", data.id],
      });
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Error Updating library");
      }
    },
  });

  const onSubmit = (value: LibraryData["status"]) => {
    setField(value);
    mutate({ ...data, status: value });
  };

  return (
    <Select
      onValueChange={(value: LibraryData["status"]) => onSubmit(value)}
      value={field}
    >
      <SelectTrigger
        className="dark:bg-primary bg-primary dark:text-primary-foreground text-primary-foreground"
        disabled={isPending}
      >
        <div className="mx-auto">
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="dark:bg-primary bg-primary dark:text-primary-foreground text-primary-foreground">
        {options.map((option) => (
          <SelectItem
            className="focus:bg-secondary focus:text-secondary-foreground"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default ChangeStatusButton;

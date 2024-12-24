import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import XIcon from "@/components/icons/x-icon";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../fields/input-field";
import { Form } from "../form";
import SelectField from "../fields/select-field";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removelibrary, updateLibrary } from "@/actions/library_actions";
import { toast } from "sonner";
import { ConfirmRemovalModal } from "./confirm-remove-library";
import { useState } from "react";

const schema = z.object({
  status: z.enum(["planning", "reading", "completed"]),
  chapter: z.number({ message: "Required" }).min(0),
  rating: z.number({ message: "Required" }).min(0).max(10),
});

type TEditLibrary = z.infer<typeof schema>;

export function EditLibraryModal({
  onClose,
  libraryData,
  title,
}: {
  onClose: () => void;
  libraryData: LibraryData;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const queryclient = useQueryClient();
  const form = useForm<TEditLibrary>({
    resolver: zodResolver(schema),
    defaultValues: {
      status: libraryData.status ? libraryData.status : "planning",
      chapter: libraryData.chapter ? libraryData.chapter : 0,
      rating: libraryData.rating ? libraryData.rating : 0,
    },
  });

  const { control, handleSubmit, watch } = form;

  const { mutate: mutateUpdate, isPending: isPendingUpdate } = useMutation({
    mutationKey: ["updateLibrary"],
    mutationFn: (data: LibraryData) => updateLibrary(data),
    onSuccess: () => {
      toast.success("Updated Successfully");
      onClose();
      queryclient.invalidateQueries({ queryKey: ["library"] });
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Error Updating library");
      }
    },
  });
  const { mutate: mutateRemove, isPending: isPendingRemove } = useMutation({
    mutationKey: ["removeLibrary"],
    mutationFn: (data: number) => removelibrary(data),
    onSuccess: () => {
      toast.success("Removed Successfully");
      onClose();
      queryclient.invalidateQueries({ queryKey: ["library"] });
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Error Updating library");
      }
    },
  });

  const handleOnOpen = (open: boolean) => {
    setIsOpen(open);
  };

  const onSubmit: SubmitHandler<TEditLibrary> = async (data) => {
    // console.log("data :", data);

    mutateUpdate({ id: libraryData.id, ...data });
  };

  const onRemove = async () => {
    mutateRemove(libraryData.id);
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
            <CardDescription>
              Make sure you save your changes after editing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <SelectField
                control={control}
                name="status"
                label="Status"
                options={[
                  { value: "planning", label: "Planning" },
                  { value: "reading", label: "Reading" },
                  { value: "completed", label: "Completed" },
                ]}
              />
              <InputField
                control={control}
                name="chapter"
                type="number"
                label="Chapter"
                showErrors
              />
              <InputField
                control={control}
                name="rating"
                type="number"
                label="Rating"
                showErrors
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              className="xs:text-sm text-xs xs:p-[1rem] p-[0.5rem]"
              disabled={isPendingUpdate || isPendingRemove}
            >
              Save Changes
            </Button>
            <ConfirmRemovalModal
              isOpen={isOpen}
              onOpenChange={handleOnOpen}
              onConfirm={onRemove}
              isPending={isPendingUpdate || isPendingRemove}
              title={title}
            />
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

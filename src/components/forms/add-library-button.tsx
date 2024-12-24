"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ButtonWithIcon } from "../ui/button-variants/button-with-icon";
import { addLibrary } from "@/actions/library_actions";
import { toast } from "sonner";

function AddLibraryButton({
  id,
  inLibrary,
}: {
  id: number;
  inLibrary: boolean;
}) {
  const queryclient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: number) => addLibrary(data),
    mutationKey: ["addLibrary"],
    onSuccess: () => {
      toast.success("Added Successfully");
      queryclient.invalidateQueries({ queryKey: ["library"] });
      queryclient.invalidateQueries({
        queryKey: ["libraryItem", id],
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

  const onSubmit = async () => {
    if (inLibrary) {
    } else {
      mutate(id);
    }
  };

  return (
    <ButtonWithIcon
      className="w-full"
      type="plus"
      onClick={onSubmit}
      disabled={isPending}
    >
      {inLibrary ? "Change Status" : isPending ? "Adding..." : "Add to Library"}
    </ButtonWithIcon>
  );
}

export default AddLibraryButton;

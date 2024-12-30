"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import StarIcon from "../icons/star-icon";
import { updateLibrary } from "@/actions/library_actions";
import { toast } from "sonner";

function StarRatings({ data }: { data: LibraryData }) {
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

  const onSubmit = (rating: number) => {
    mutate({ ...data, rating });
  };

  return (
    <div className="flex sm:gap-[0.5rem] gap-[0.25rem] items-center cursor-pointer">
      {Array.from({ length: 10 }, (_, index) => (
        <StarIcon
          key={index}
          className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem] cursor-pointer"
          onClick={() => onSubmit(index + 1)}
          fill={index >= data.rating ? "none" : ""}
        />
      ))}
    </div>
  );
}

export default StarRatings;

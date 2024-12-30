"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import StarIcon from "../icons/star-icon";
import { updateLibrary } from "@/actions/library_actions";
import { toast } from "sonner";
import { useState } from "react";

function StarRatings({ data }: { data: LibraryData }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <div className="flex items-center cursor-pointer">
      {Array.from({ length: 10 }, (_, index) => {
        const isFilled =
          hoveredIndex === null ? index >= data.rating : index > hoveredIndex;
        return (
          <div
            key={index}
            className={`cursor-pointer ${
              index === 0 ? "sm:pr-1 pr-0.5" : "sm:px-1 px-0.5"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => onSubmit(index + 1)}
          >
            <StarIcon
              className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]"
              fill={isFilled ? "none" : ""}
            />
          </div>
        );
      })}
    </div>
  );
}

export default StarRatings;

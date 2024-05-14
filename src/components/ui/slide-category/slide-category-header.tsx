import ChevronRight from "@/components/icons/chevron-right";
import React from "react";

function SlideCategoryHeader({ title }: { title: string }) {
  return (
    <div className="w-full h-[3rem] flex  justify-between text-foreground pr-[1.125rem]">
      <div className="flex items-center text-3xl font-bold h-full">
        <span>{title}</span>
      </div>
      <div className="flex items-center h-full">
        <span className="text-2xl leading-[2rem] font-bold">View All</span>
        <div className="pb-[0.2rem]">
          <ChevronRight className="stroke-foreground" />
        </div>
      </div>
    </div>
  );
}

export default SlideCategoryHeader;

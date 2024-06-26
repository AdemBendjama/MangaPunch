import React from "react";

function CardLargeLoading() {
  return (
    <div className="flex flex-col gap-[0.5rem] lg:w-[176px] sm:w-[18vw] w-[28vw] animate-pulse">
      <div className="bg-gray-200 w-full lg:h-[276px] sm:h-[28vw] h-[45.5vw] rounded-[0.375rem] relative overflow-hidden" />
      <span className="bg-gray-200 font-semibold rounded-[0.375rem] sm:text-sm text-xs sm:min-h-[2.5rem] min-h-[2rem] text-muted-foreground w-full overflow-hidden text-ellipsis line-clamp-2" />
    </div>
  );
}

export default CardLargeLoading;

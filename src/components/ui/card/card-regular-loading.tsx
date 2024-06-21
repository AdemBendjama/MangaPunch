function CardRegularLoading() {
  return (
    <div className="animate-pulse flex flex-col gap-[0.5rem] lg:w-[176px] md:w-[16vw] w-[28vw] relative">
      <div className="bg-gray-200 lg:h-[276px] md:h-[26vw] h-[45.5vw] rounded-[6px] overflow-hidden relative" />
      <span className="bg-gray-200 rounded-[6px] font-semibold sm:text-sm text-xs sm:min-h-[2.5rem] min-h-[2rem] text-muted-foreground w-full overflow-hidden text-ellipsis line-clamp-2" />
    </div>
  );
}

export default CardRegularLoading;

function CardSmallLoading() {
  return (
    <div className="animate-pulse flex flex-col gap-[0.5rem] lg:w-[150px] md:w-[16vw] xs:w-[20vw] w-[28vw]">
      <div className="bg-gray-200 lg:h-[240px] md:h-[26vw] xs:h-[31vw] h-[45.5vw] rounded-[0.375rem] overflow-hidden relative"></div>
      <span className="bg-gray-200 rounded-[0.375rem] font-semibold sm:text-sm text-xs sm:min-h-[2.5rem] min-h-[2rem] text-muted-foreground w-full overflow-hidden text-ellipsis line-clamp-2"></span>
    </div>
  );
}
export default CardSmallLoading;

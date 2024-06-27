const SlideLoading = () => {
  return (
    <div className="flex flex-col gap-[0.5rem] 2xl:w-[13vw] lg:w-[15vw] sm:w-[18vw] w-[36vw] animate-pulse">
      <div className="w-full 2xl:h-[20.5vw] lg:h-[23.5vw] sm:h-[28vw] h-[58vw] rounded-[0.375rem] bg-gray-200"></div>
      <div className="rounded-[0.375rem] font-semibold 2xl:text-xl lg:text-lg text-sm 2xl:h-[3.5rem] lg:h-[3.5rem] h-[2.5rem] bg-gray-200 w-full"></div>
    </div>
  );
};

export default SlideLoading;

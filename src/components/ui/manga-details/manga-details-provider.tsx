function MangaDetailsProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[1rem] bg-background pt-[1rem] pb-[10rem] lg:px-[10rem] sm:px-[3rem] px-[1rem]">
      {children}
    </div>
  );
}

export default MangaDetailsProvider;

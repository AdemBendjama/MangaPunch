function Description({ description }: { description: string | null }) {
  return (
    <>
      <div className="flex flex-col gap-[1rem] py-[1rem]">
        <span className="font-bold sm:text-lg test-base">Description:</span>
        <span
          className="font-medium sm:text-base text-sm"
          dangerouslySetInnerHTML={{
            __html: description ? description : "No bio found... :(",
          }}
        />
      </div>
    </>
  );
}

export default Description;

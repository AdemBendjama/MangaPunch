import SlideCategoryHeader from "./slide-category-header";

function SlideCategory({ title }: { title: string }) {
  return (
    <div className="h-[28.75rem] flex flex-col py-[1rem] items-center gap-[1rem]">
      <SlideCategoryHeader title={title} />
      <div></div>
    </div>
  );
}

export default SlideCategory;

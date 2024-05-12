import SlideCategory from "@/components/ui/slide-category/slide-category";
import SlideShow from "@/components/ui/slide-show/slide-show";

export default function Home() {
  return (
    <>
      <SlideShow />
      <div className="flex flex-col gap-[2rem] pt-[4rem] pb-[10rem]">
        <SlideCategory title="Trending" />
        <SlideCategory title="Shonen" />
        <SlideCategory title="Seinen" />
      </div>
    </>
  );
}

import ChevronRight from "@/components/icons/chevron-right";
import Link from "next/link";

function SlideCategoryHeader({ title, link }: { title: string; link: string }) {
  return (
    <div className="2xl:w-[85.5vw] lg:w-[84vw] sm:w-[78vw] w-[76vw] flex justify-between text-foreground">
      <div className="flex items-center lg:text-3xl sm:text-xl text-base font-bold h-full">
        <span>{title}</span>
      </div>
      <div className="flex items-center">
        <div className="flex items-start gap-[0.1rem]">
          <Link href={link}>
            <span className="lg:text-2xl sm:text-base text-xs font-bold">
              View All
            </span>
          </Link>
          <div>
            <ChevronRight className="stroke-foreground lg:w-6 sm:w-[1rem] w-[0.75rem] lg:h-[1.875rem] sm:h-[1.4rem] h-[0.875rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideCategoryHeader;

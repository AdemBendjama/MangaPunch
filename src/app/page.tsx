import {
  GET_SEINEN_MANGA,
  GET_SHOUNEN_MANGA,
  GET_TRENDING_MANGA,
} from "@/lib/queries";

import SlideCategory from "@/components/ui/slide-category/slide-category";
import SlideShow from "@/components/ui/slide-show/slide-show";
import { Suspense } from "react";

function Home() {
  return (
    <>
      <SlideShow />
      <div className="flex flex-col lg:gap-[1rem] xl:pt-[3rem] lg:pt-[2rem] sm:pt-[rem] pt-[0.5rem] lg:pb-[10rem] pb-[3rem] ">
        <Suspense>
          <SlideCategory
            title="Trending"
            query={GET_TRENDING_MANGA}
            perPage={10}
          />
        </Suspense>
        <Suspense>
          <SlideCategory
            title="Shounen"
            query={GET_SHOUNEN_MANGA}
            perPage={10}
          />
        </Suspense>
        <Suspense>
          <SlideCategory title="Seinen" query={GET_SEINEN_MANGA} perPage={10} />
        </Suspense>
      </div>
    </>
  );
}

export default Home;

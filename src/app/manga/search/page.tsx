import SearchResults from "@/components/ui/search/search-results";
import SearchBar from "@/components/ui/search/search-bar";
import { Suspense } from "react";
import { SortForm } from "@/components/forms/sort-form";
import { FilterForm } from "@/components/forms/filter-form";

function SearchPage() {
  return (
    <div className="lg:mx-auto lg:w-[63rem] lg:px-[0rem] sm:px-[1rem] pb-[10rem]">
      <SearchBar />
      <Suspense>
        <FilterForm />
      </Suspense>
      <Suspense>
        <SortForm />
      </Suspense>
      <Suspense>
        <SearchResults />
      </Suspense>
    </div>
  );
}

export default SearchPage;

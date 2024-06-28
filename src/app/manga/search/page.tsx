import SearchResults from "@/components/ui/search/search-results";
import SearchBar from "@/components/ui/search/search-bar";
import { Suspense } from "react";
import { SelectForm } from "@/components/forms/select-form";

function SearchPage() {
  return (
    <div className="lg:mx-auto lg:w-[63rem] lg:px-[0rem] sm:px-[1rem] pb-[10rem]">
      <SearchBar />
      <Suspense>
        <SelectForm />
      </Suspense>
      <Suspense>
        <SearchResults />
      </Suspense>
    </div>
  );
}

export default SearchPage;

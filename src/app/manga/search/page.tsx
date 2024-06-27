import SearchResults from "@/components/ui/search/search-results";
import SearchBar from "@/components/ui/search/search-bar";
import SearchFilter from "@/components/ui/search/search-filter";

function SearchPage() {
  return (
    <div className="lg:mx-auto lg:w-[63rem] lg:px-[0rem] sm:px-[1rem] pb-[10rem]">
      <SearchBar />
      <SearchFilter />
      <SearchResults />
    </div>
  );
}

export default SearchPage;

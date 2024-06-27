import SearchIcon from "@/components/icons/search-icon";
import { SearchForm } from "@/components/forms/search-form";

function SearchBar() {
  return (
    <div className="flex flex-col items-center gap-[2rem] py-[2rem] px-[1rem]">
      <div className="flex sm:w-auto w-full rounded-[0.375rem] shadow-input-drop overflow-hidden">
        <div
          className="flex justify-end items-center
    w-[2rem] h-[3rem] pr-[0.2rem] pb-[0.1rem] 
    bg-background-secondary dark:bg-background stroke-black dark:stroke-foreground"
        >
          <SearchIcon className="w-[1rem] h-[1rem] stroke-[3px]" />
        </div>
        <div className="overflow-hidden sm:w-auto w-full">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

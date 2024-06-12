import SearchIcon from "@/components/icons/search-icon";
import CardLarge from "@/components/ui/card/card-large";
import { Input } from "@/components/ui/input";
import SelectDropDown from "@/components/ui/select-dropdown/select-dropdown";

const genreItems = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Thriller",
];

const formatItems = [
  "Tankobon",
  "Webtoon",
  "Light Novel",
  "One-shot",
  "Doujinshi",
];

const yearItems = [
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2010-2014",
  "2000-2009",
  "1990-1999",
  "1980-1989",
];

const publishingStatusItems = ["Ongoing", "Completed", "Hiatus", "Cancelled"];

const countryItems = ["Japan", "South Korea", "China"];
function MangaSearchPage() {
  return (
    <div className="lg:mx-auto lg:w-[63rem] lg:px-[0rem] sm:px-[2rem] px-[1rem] pb-[10rem]">
      <div className="flex flex-col items-center gap-[1.5rem] py-[2rem]">
        <div className="flex border-[1px] border-input rounded-[0.375rem] overflow-hidden">
          <div
            className="flex justify-end items-center
          w-[2rem] h-[3rem] pr-[0.2rem] pb-[0.1rem] 
          bg-white dark:bg-background stroke-black dark:stroke-foreground"
          >
            <SearchIcon className="w-[1rem] h-[1rem] stroke-[3px]" />
          </div>
          <div className="overflow-hidden">
            <Input
              className="flex justify-start items-center
            w-[29rem] h-[3rem] p-[0.5rem] rounded-none border-0 
            bg-white dark:bg-background text-black dark:text-foreground"
            />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <SelectDropDown label="Genre" items={genreItems} />
          <SelectDropDown label="Format" items={formatItems} />
          <SelectDropDown label="Year" items={yearItems} />
          <SelectDropDown
            label="Publishing Status"
            items={publishingStatusItems}
          />
          <SelectDropDown label="Country of Origin" items={countryItems} />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-[1rem]">
        <div className="flex w-fill justify-between">
          <CardLarge />
          <CardLarge />
          <CardLarge />
          <CardLarge />
          <CardLarge />
        </div>
      </div>
    </div>
  );
}

export default MangaSearchPage;

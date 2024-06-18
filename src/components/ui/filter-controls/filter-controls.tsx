import FilterOptions from "./filter-options";
import StatusToolBar from "./status-toolbar";

function FilterControls() {
  return (
    <div className="flex xs:flex-row flex-col xs:justify-between xs:items-center xs:gap-0 gap-[1rem] py-[1rem]">
      <StatusToolBar />
      <FilterOptions />
    </div>
  );
}

export default FilterControls;

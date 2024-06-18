import SortIcon from "@/components/icons/sort-icon";

function SortOptions() {
  return (
    <div className="flex items-center gap-[0.25rem] xs:self-auto self-end">
      <SortIcon className="sm:min-w-[1rem] sm:min-h-[1rem] w-[0.875rem] h-[0.875rem] stroke-muted-foreground text-muted-foreground dark:text-foreground dark:stroke-foreground" />
      <span className="font-bold text-muted-foreground dark:text-foreground sm:text-base text-sm">
        Progress
      </span>
    </div>
  );
}

export default SortOptions;

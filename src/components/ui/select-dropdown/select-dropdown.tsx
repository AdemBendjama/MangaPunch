import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectDropDown({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-[0.375rem]">
      <label className="font-medium text-base">{label}</label>
      <div className="overflow-hidden">
        <Select>
          <SelectTrigger className="w-[174px] bg-white dark:bg-background">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-background">
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.toLowerCase()} value={item.toLowerCase()}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default SelectDropDown;

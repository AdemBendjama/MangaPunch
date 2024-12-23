import {
  Control,
  FieldName,
  FieldPath,
  FieldValues,
  Path,
} from "react-hook-form";
import {
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormMessage,
} from "../form";
import { Input, InputProps } from "../input";
import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

function SelectField<
  // define generic type
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  placeholder,
  options,
  className,
  labelClassName,
  inputClassName,
  showErrors,
}: {
  // acquire generic type value from passed prop
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  showErrors?: boolean;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("", className)}>
          {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className={inputClassName}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {showErrors && <FormMessage />}
        </FormItem>
      )}
    />
  );
}

export default SelectField;

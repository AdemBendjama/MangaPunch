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

function InputField<
  // define generic type
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
  type = "text",
  label,
  placeholder,
  className,
  labelClassName,
  inputClassName,
  inputProps,
  showErrors,
}: {
  // acquire generic type value from passed prop
  control: Control<TFieldValues>;
  name: TName;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  label?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  inputProps?: Omit<InputProps, "className" | "name" | "type" | "placeholder">;
  showErrors?: boolean;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("", className)}>
          {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className={inputClassName}
              {...inputProps}
              onChange={(e) => {
                // parse numbers in input type number
                const value = e.target.value;
                field.onChange(
                  type === "number"
                    ? isNaN(parseInt(value))
                      ? field.value
                      : parseInt(value)
                    : value
                );
              }}
            />
          </FormControl>
          {showErrors && <FormMessage />}
        </FormItem>
      )}
    />
  );
}

export default InputField;

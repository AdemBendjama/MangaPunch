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
import { Input } from "../input";

function InputField<
  // define generic type
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  showErrors,
}: {
  // acquire generic type value from passed prop
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  showErrors?: boolean;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          {showErrors && <FormMessage />}
        </FormItem>
      )}
    />
  );
}

export default InputField;

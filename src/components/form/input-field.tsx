import { Box, TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

export type InputFieldProps<T extends FieldValues> = TextFieldProps & {
  name: Path<T>;
  control?: Control<any>;
};
export function InputField<T extends FieldValues>({
  name,
  control,
  onChange: externalOnChange, // để ngăn chặn sự overwrite thuộc tính onChange
  onBlur: externalOnBlur, // để ngăn chặn sự overwrite thuộc tính onBlur
  ref: externalRef, // để ngăn chặn sự overwrite thuộc tính ref
  value: externalValue, // để ngăn chặn sự overwrite thuộc tính value
  ...props
}: InputFieldProps<T>) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      name={name}
      value={value}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        externalOnChange?.(event);
      }}
      {...props}
    />
  );
}

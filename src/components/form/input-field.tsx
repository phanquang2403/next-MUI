import { Box, TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";
import { Control, useController } from "react-hook-form";

export type InputFieldProps = TextFieldProps & {
  name: string;
  control?: Control<any>;
};
export function InputField({
  name,
  control,
  onChange: externalOnChange, // để ngăn chặn sự overwrite thuộc tính onChange
  onBlur: externalOnBlur, // để ngăn chặn sự overwrite thuộc tính onBlur
  ref: externalRef, // để ngăn chặn sự overwrite thuộc tính ref
  value: externalValue, // để ngăn chặn sự overwrite thuộc tính value
  ...props
}: InputFieldProps) {
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

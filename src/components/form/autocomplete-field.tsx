import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { TextField } from "@mui/material";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import { Control, FieldValues, Path, useController } from "react-hook-form";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export type AutoCompleteFieldProps<T, K extends FieldValues> = Partial<
  AutocompleteProps<T, boolean, boolean, boolean>
> & {
  name: Path<K>;
  control?: Control<K>;
  placeholder: string;
  label?: string;
  options: T[];
  getOptionLabel: (option: T) => string;
  onChange: (selectedOptions: T[]) => void;
};
export function AutoCompleteField<T, K extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  options,
  getOptionLabel,
  isOptionEqualToValue,
  onChange: externalOnChange, // để ngăn chặn sự overwrite thuộc tính onChange
  // onBlur: externalOnBlur, // để ngăn chặn sự overwrite thuộc tính onBlur
  // ref: externalRef, // để ngăn chặn sự overwrite thuộc tính ref
  // value: externalValue, // để ngăn chặn sự overwrite thuộc tính value
  ...props
}: AutoCompleteFieldProps<T, K>) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Autocomplete
      multiple
      fullWidth
      size="small"
      options={options}
      disableCloseOnSelect
      id="checkboxes-tags-demo"
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {getOptionLabel(option) || "-"}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          margin="normal"
          {...params}
          name={name}
          label="Filter by category"
          placeholder={placeholder}
          error={!!error}
          helperText={error?.message}
        />
      )}
      onChange={(event, value: any) => {
        onChange(value);
        externalOnChange?.(value as T[]);
      }}
      onBlur={onBlur}
      value={value}
      ref={ref}
    />
  );
}

import { InputField } from "@/components/form";
import { Search } from "@mui/icons-material";
import { Box, InputAdornment, debounce } from "@mui/material";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

interface WorkFiltersProps {
  initalValue: string;
  onSubmit?: (payload: WorkType.WorkFiltersPayload) => void;
}

export function WorkFilters({ initalValue, onSubmit }: WorkFiltersProps) {
  const { control, handleSubmit } = useForm<WorkType.WorkFiltersPayload>({
    defaultValues: {
      search: initalValue ? initalValue : "",
    },
  });

  const handleLoginSubmit = async (payload: WorkType.WorkFiltersPayload) => {
    await onSubmit?.(payload);
  };

  const debounceSeachChange = debounce(handleSubmit(handleLoginSubmit), 350);

  return (
    <Box component={"form"} onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField
        name="search"
        control={control}
        placeholder="Search work by title"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          debounceSeachChange();
        }}
      />
    </Box>
  );
}

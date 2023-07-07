import { AutoCompleteField, InputField } from "@/components/form";
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
    // đối với autocomplete thì phải convert payload data để gửi đi tránh lỗi
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
      <AutoCompleteField
        name="selectedTagList"
        label="Filter By categor"
        placeholder="Categories"
        control={control}
        options={optionsExample}
        getOptionLabel={(option) =>
          typeof option !== "string" ? option.title : ""
        }
        isOptionEqualToValue={(option, value) => option.year === value.year}
        onChange={() => {
          debounceSeachChange();
        }}
      />
    </Box>
  );
}

const optionsExample = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

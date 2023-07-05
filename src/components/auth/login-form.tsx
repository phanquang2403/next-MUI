import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputField } from "../form/input-field";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoginPayload } from "@/models";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
interface LoginFormProps {
  onSubmit: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup
    .object({
      username: yup
        .string()
        .required("Please enter username")
        .min(4, "Username is required to have at least 4 character"),
      password: yup
        .string()
        .required("Please enter password")
        .min(6, "Username is required to have at least 6 character"),
    })
    .required();

  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: {
      username: undefined,
      password: undefined,
    },
    resolver: yupResolver(schema),
  });

  const handleLoginSubmit = (payload: LoginPayload) => {
    onSubmit?.(payload);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" control={control} label={"Username"} />
      <InputField
        name="password"
        control={control}
        label={"Password"}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        login
      </Button>
    </Box>
  );
}

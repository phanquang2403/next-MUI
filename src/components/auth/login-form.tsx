import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputField } from "../form/input-field";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoginPayload } from "@/models";

interface LoginFormProps {
  onSubmit: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: {
      username: "",
      password: "",
    },
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
    <Box
      component={"form"}
      onSubmit={handleSubmit(handleLoginSubmit)}
      sx={{
        maxWidth: "240px",
      }}
    >
      <InputField name="username" control={control} />
      <InputField
        name="password"
        control={control}
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
      <Button type="submit">login</Button>
    </Box>
  );
}

import { LoginForm } from "@/components/auth";
import { useAuth } from "@/hooks";
import { getErrorMessage } from "@/utils";
import { Box, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false, // mới vào trang login k muốn call api get profile
  });

  const handleLogin = async (payload: Auth.LoginPayload) => {
    try {
      await login(payload);
      toast.success("Đăng nhập thành công, đang chuyển hướng...");
      router.push("/");
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  };

  return (
    <Box className="m-4">
      <Paper
        elevation={4}
        sx={{
          mt: 8,
          p: 4,
          maxWidth: "480px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography component={"h1"} variant="h5">
          Login Page
        </Typography>
        <LoginForm onSubmit={handleLogin} />
      </Paper>
    </Box>
  );
}

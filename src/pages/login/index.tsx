import { authApi } from "@/api-client";
import { LoginForm } from "@/components/auth";
import { useAuth } from "@/hooks";
import { LoginPayload } from "@/models";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false, // mới vào trang login k muốn call api get profile
  });

  const handleLogin = async (payload: LoginPayload) => {
    try {
      await login(payload);
      router.push("/about");
    } catch (error) {
      console.log("failed to login", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.log("failed to logout", error);
    }
  };

  return (
    <div className="m-4">
      <h1>Login page</h1>

      <p>{JSON.stringify(profile ?? {}, null, 4)}</p>

      <button onClick={handleLogout} className="border border-solid px-4 py-2">
        Logout
      </button>

      <button
        onClick={() => router.push("/about")}
        className="border border-solid px-4 py-2"
      >
        about
      </button>

      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

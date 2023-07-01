import { authApi } from "@/api-client";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false, // mới vào trang login k muốn call api get profile
  });

  const handleLogin = async () => {
    try {
      await login();
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
    <div>
      <h1>Login page</h1>

      <button onClick={handleLogin} className="border border-solid px-4 py-2">
        Login
      </button>
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
    </div>
  );
}

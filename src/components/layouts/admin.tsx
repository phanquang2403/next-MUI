import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";
import { Auth } from "../common";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

export function Adminlayout({ children }: LayoutProps) {
  const router = useRouter();

  const { profile, logout } = useAuth({
    revalidateOnMount: false, // mới vào trang login k muốn call api get profile
  });

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.log("failed to logout", error);
    }
  };

  return (
    <Auth>
      <h1>Adminlayout</h1>
      <div className="flex gap-1 justify-between bg-green-300">
        <div>
          <Link href="/" className="text-red-500">
            Home
          </Link>
          <Link href="/about" className="text-red-500">
            about
          </Link>
        </div>

        <div>
          <p>{profile?.username}</p>
          <button
            onClick={handleLogout}
            className="border border-solid px-4 py-2 bg-red-400"
          >
            Logout
          </button>
        </div>
      </div>
      <div>{children}</div>
    </Auth>
  );
}

import { PublicConfiguration } from "swr/_internal";
import useSWR from "swr";
import { authApi } from "@/api-client";

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: 60 * 60 * 1000, //1h
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  console.log({ profile, error });

  const login = async () => {
    await authApi.login({
      username: "test1",
      password: "123456",
    });
    await mutate(); //trigger API update data
  };

  const logout = async () => {
    await authApi.logout();
    await mutate(null, false);
  };

  return { profile, firstLoading, error, login, logout };
}

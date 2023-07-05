import { PublicConfiguration } from "swr/_internal";
import useSWR from "swr";
import { authApi } from "@/api-client";
import { LoginPayload } from "@/models";

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

  const login = async (payload: LoginPayload) => {
    await authApi.login({
      username: payload.username,
      password: payload.password,
    });
    await mutate(); //trigger API update data
  };

  const logout = async () => {
    await authApi.logout();
    await mutate(null, false);
  };

  return { profile, firstLoading, error, login, logout };
}

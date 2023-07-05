import { PublicConfiguration } from "swr/_internal";
import useSWR from "swr";
import { authApi } from "@/api-client";
import { LoginPayload, UserProfile } from "@/models";
import React from "react";

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR<UserProfile | null, unknown, any>("/profile", {
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

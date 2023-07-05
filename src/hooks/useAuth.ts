import { PublicConfiguration } from "swr/_internal";
import useSWR from "swr";
import { authApi } from "@/api-client";
import { LoginPayload, UserProfile } from "@/models";
import React from "react";
import { STORAGE_KEY } from "@/utils/contants";

function getUserInfo(): UserProfile | null {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY.USER_INFO) || "");
  } catch (error) {
    // console.log("failed to parse user info from local storage", error);
    return null;
  }
}

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR<UserProfile | null, unknown, any>("/profile", {
    dedupingInterval: 60 * 60 * 1000, //1h
    revalidateOnFocus: false,
    ...options,
    fallbackData: getUserInfo(), // data khởi tạo ban đầu
    onSuccess(data: any) {
      // save info to localStorage
      localStorage.setItem(STORAGE_KEY.USER_INFO, JSON.stringify(data));
    },
    onError(err: any) {
      // clear info to localStorage => logout
      console.log(err);
      logout();
    },
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
    localStorage.removeItem(STORAGE_KEY.USER_INFO);
  };

  return { profile, firstLoading, error, login, logout };
}

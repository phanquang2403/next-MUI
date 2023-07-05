import { SWRConfiguration } from "swr";
import useSWR from "swr";
import { authApi } from "@/api-client";
import { LoginPayload, UserProfile } from "@/models";
import React from "react";
import { STORAGE_KEY, jsonParse } from "@/utils/contants";
import { useLocalStorage } from "./useLocalStorage";

export function useAuth(options?: Partial<SWRConfiguration>) {
  const { setItem, getItem, removeItem } = useLocalStorage();

  const {
    data: profile,
    error,
    mutate,
  } = useSWR<UserProfile | null>("/profile", {
    dedupingInterval: 60 * 60 * 1000, //1h
    revalidateOnFocus: false,
    fallbackData: jsonParse<UserProfile>(getItem(STORAGE_KEY.USER_INFO)),
    ...options,
    onSuccess(data: any) {
      // save info to localStorage
      setItem(STORAGE_KEY.USER_INFO, data || "");
    },
    onError() {
      // clear info to localStorage => logout
      logout();
    },
  });

  console.log("profile", profile);

  const firstLoading = profile === undefined && error === undefined;

  const login = async (payload: LoginPayload) => {
    await authApi.login({
      username: payload.username,
      password: payload.password,
    });
    await mutate(); ///sau khi mà login thành công thưc hiện featch call api get profile
  };

  const logout = async () => {
    await authApi.logout();
    await mutate(null, false); //logout xóa data và không call lại api profile
    removeItem(STORAGE_KEY.USER_INFO);
  };

  return { profile, firstLoading, error, login, logout };
}

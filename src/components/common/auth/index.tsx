import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  children: any;
}
export function Auth({ children }: Props) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();

  useEffect(() => {
    if (!firstLoading && !profile?.username) router.push("/login");
  }, [router, firstLoading, profile]);

  if (!profile?.username) return <div>loading....</div>;

  return <div className="p-4">{children}</div>;
}

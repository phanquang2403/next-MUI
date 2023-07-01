import { LayoutProps } from "@/models";
import Link from "next/link";
import React, { useEffect } from "react";

export function Mainlayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log("mounting");
    return () => console.log("unmounting");
  }, []);

  return (
    <div>
      <h1>Mainlayout</h1>
      <div className="flex gap-2">
        <Link href="/" className="text-red-500">
          Home
        </Link>
        <Link href="/about" className="text-red-500">
          about
        </Link>

        <div>{children}</div>
      </div>
    </div>
  );
}

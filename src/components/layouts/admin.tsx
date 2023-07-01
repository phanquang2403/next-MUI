import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";

export function Adminlayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Adminlayout</h1>
      <div>
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

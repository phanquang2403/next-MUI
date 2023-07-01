import { LayoutProps } from "@/models";
import React, { Children } from "react";

export function Emptylayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}

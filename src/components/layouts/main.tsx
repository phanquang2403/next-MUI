import { LayoutProps } from "@/models";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import { Footer, Header } from "../common";

export function Mainlayout({ children }: LayoutProps) {
  // useEffect(() => {
  //   console.log("mounting");
  //   return () => console.log("unmounting");
  // }, []);

  return (
    <Stack minHeight={"100vh"}>
      <Header />

      <Box component={"main"}>
        <Link href="/" className="text-red-500">
          Home
        </Link>

        <Link href="/about" className="text-red-500">
          About
        </Link>

        <Link href="/works" className="text-red-500">
          Works
        </Link>

        <Link href="/blog" className="text-red-500">
          Blog
        </Link>

        {children}
      </Box>

      <Footer />
    </Stack>
  );
}

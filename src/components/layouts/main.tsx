import { LayoutProps } from "@/models";
import { Box, Container, Stack } from "@mui/material";
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
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: "primary.main",
          }}
        >
          SM
        </Container>

        <Container
          sx={{
            bgcolor: "primary.main",
          }}
        >
          MD
        </Container>
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

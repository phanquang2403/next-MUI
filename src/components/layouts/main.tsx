import { LayoutProps } from "@/models";
import { Box, Container, Stack } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import { Auth, Footer, Header } from "../common";

export function Mainlayout({ children }: LayoutProps) {
  // useEffect(() => {
  //   console.log("mounting");
  //   return () => console.log("unmounting");
  // }, []);

  return (
    <Auth>
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

          {children}
        </Box>

        <Footer />
      </Stack>
    </Auth>
  );
}

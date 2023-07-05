import { LayoutProps } from "@/models";
import { Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import { Footer } from "./footer";

const Header = dynamic(() => import("./header"), { ssr: false });

export function Mainlayout({ children }: LayoutProps) {
  // useEffect(() => {
  //   console.log("mounting");
  //   return () => console.log("unmounting");
  // }, []);

  return (
    // <Auth> // bảo vệ layout cần đăng nhập
    <Stack minHeight={"100vh"}>
      <Header />

      <Box component={"main"}>
        {/* <Container
            maxWidth="sm"
            sx={{
              bgcolor: "primary.main",
            }}
          >
            SM

          <Container
            sx={{
              bgcolor: "primary.main",
            }}
          >
            MD
          </Container> */}

        {children}
      </Box>

      <Footer />
    </Stack>

    // </Auth>
  );
}

import { HeroSection } from "@/components/home";
import { Adminlayout, Mainlayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/models";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {};

const PageHome: NextPageWithLayout = (props: Props) => {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
};

PageHome.Layout = Mainlayout;

export default PageHome;

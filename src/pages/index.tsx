import { HeroSection } from "@/components/home";
import { Adminlayout, Mainlayout } from "@/components/layouts";
import { Seo } from "@/components/seo";
import { NextPageWithLayout } from "@/models";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {};

const PageHome: NextPageWithLayout = (props: Props) => {
  return (
    <Box>
      <Seo
        data={{
          title: "Nextjs | PDQ",
          discription:
            "With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!",
          url: "github.com/phanquang2403",
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEo5wad_ES-OteSzH8L_otx3d3cJAjalCM-VVw0miBA&s",
        }}
      />
      <HeroSection />
    </Box>
  );
};

PageHome.Layout = Mainlayout;

export default PageHome;

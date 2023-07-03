import { Adminlayout, Mainlayout } from "@/components/layouts";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {};

const PageHome = (props: Props) => {
  return <Box>Home page</Box>;
};

PageHome.Layout = Mainlayout;

export default PageHome;

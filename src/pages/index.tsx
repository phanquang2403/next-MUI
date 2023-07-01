import { Adminlayout } from "@/components/layouts";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {};

const PageHome = (props: Props) => {
  return <div>home about</div>;
};

PageHome.Layout = Adminlayout;

export default PageHome;

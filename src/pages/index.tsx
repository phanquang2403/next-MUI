import Image from "next/image";
import { Inter } from "next/font/google";
import { Mainlayout } from "@/components";

const inter = Inter({ subsets: ["latin"] });

type Props = {};

const PageHome = (props: Props) => {
  return <div>home about</div>;
};

PageHome.Layout = Mainlayout;

export default PageHome;

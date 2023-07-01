import { Emptylayout } from "@/components";
import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // sẽ lấy từ Pagelayout.Layout để wrapper Component lại
  const Layout = Component.Layout ?? Emptylayout;
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

import axiosClient from "@/api-client/axios-client";
import { Emptylayout } from "@/components/layouts";
import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // sẽ lấy từ Pagelayout.Layout để wrapper Component lại
  const Layout = Component.Layout ?? Emptylayout;

  const option = {
    fetcher: (url: any) => axiosClient.get(url),
    shouldRetryOnError: false,
  };

  return (
    <SWRConfig value={option}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SWRConfig>
  );
}

import axiosClient from "@/api-client/axios-client";
import { Emptylayout } from "@/components/layouts";
import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";
import { createEmotionCache, theme } from "@/utils";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import { SWRConfig } from "swr";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyAppProps({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  // sẽ lấy từ Pagelayout.Layout để wrapper Component lại
  const Layout = Component.Layout ?? Emptylayout;

  const option = {
    fetcher: (url: any) => axiosClient.get(url),
    shouldRetryOnError: false,
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig value={option}>
          <Layout>
            <Component {...pageProps} />;
          </Layout>
          <ToastContainer autoClose={3000} />
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

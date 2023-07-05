import Head from "next/head";

export interface SeoData {
  title?: string;
  discription?: string;
  url?: string;
  thumbnailUrl?: string;
}
export interface SeoProps {
  data: SeoData;
}
export function Seo({ data }: SeoProps) {
  const { title, discription, url, thumbnailUrl } = data;
  return (
    <Head>
      <title>Nextjs | PDQ</title>
      <meta name="title" content={title} />
      <meta name="description" content={discription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={discription} />
      <meta property="og:image" content={thumbnailUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={discription} />
      <meta property="twitter:image" content={thumbnailUrl} />
    </Head>
  );
}

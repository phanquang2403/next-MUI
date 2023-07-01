// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error: boolean;
  data?: any;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    res.status(404).json({
      error: true,
      message: "error get list product ",
      data: undefined,
    });
  }

  const rss = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const rssJson = await rss.json();

  res
    .status(200)
    .json({ message: "Internal Server Error", error: false, data: rssJson });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    res.status(404).json({
      error: true,
      message: "not found logout",
      data: undefined,
    });
  }

  const cookie = new Cookies(req, res);
  cookie.set("access_token");

  res.status(200).json({ error: false, name: "logout successfully" });
}

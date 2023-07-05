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
  return new Promise<void>((resolve) => {
    console.log("_____");
    //convert cookie to header Authorization
    const cookie = new Cookies(req, res);
    const accessToken = cookie.get("access_token");
    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    //don't send cookies to API server
    req.headers.cookie = "";
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false, //response  server handle and return
    });

    proxy.once("proxyRes", () => {
      resolve();
    });
  });

  // res.status(200).json({ name: "PATH - MATH " });
}

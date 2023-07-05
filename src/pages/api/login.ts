// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
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
      message: "not found login",
      data: undefined,
    });
  }

  return new Promise<void>((resolve) => {
    //don't send cookies to API server
    req.headers.cookie = "";

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", function (chuck) {
        body += chuck;
      });

      proxyRes.on("end", function () {
        try {
          // nếu login faild
          const isSuccess =
            (proxyRes.statusCode || 0) >= 200 &&
            (proxyRes.statusCode || 0) <= 300;

          if (!isSuccess) {
            (res as NextApiResponse)
              .status(proxyRes.statusCode || 500)
              .json({ error: true, message: body });
            return resolve();
          }

          const { accessToken, expiredAt } = JSON.parse(body);
          // convert  token to cookie
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== "development",
          });

          cookies.set("access_token", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(expiredAt),
          });

          (res as NextApiResponse)
            .status(200)
            .json({ error: false, message: "login successfully!" });
        } catch (error) {
          (res as NextApiResponse)
            .status(500)
            .json({ error: true, message: "something went wrong!" });
        }

        resolve();
      });
    };

    proxy.once("proxyRes", handleLoginResponse);

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true, //response  server handle and return (true), client handle (false)
    });
  });

  // res.status(200).json({ name: "PATH - MATH " });
}

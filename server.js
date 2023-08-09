const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  //   // Chuyển hướng yêu cầu API đến server Next.js
  //   server.use(
  //     "/api",
  //     createProxyMiddleware({
  //       target: "http://localhost:3000", // Địa chỉ Next.js
  //       changeOrigin: true,
  //     })
  //   );

  // Xử lý các yêu cầu không phải API bằng Next.js
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});

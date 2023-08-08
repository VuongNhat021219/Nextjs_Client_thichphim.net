const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;

nextApp.prepare().then(() => {
  const app = express();

  // Middleware để phân tích và truy cập req.body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Sử dụng các tệp tĩnh từ thư mục "public"
  app.use(express.static("public"));

  // Xử lý các yêu cầu Next.js
  app.get("*", (req, res) => {
    return nextHandle(req, res);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ứng dụng của bạn đang chạy trên cổng: ${port}`);
  });
});
const express = require("express");
const next = require("next");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const passport = require("passport");

const mainRoutes = require("./server/src/Routes/mainRoutes");
const apiOphim = require("./server/src/api/ApiParty3/Ophim");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();

const app = express();
const port = process.env.PORT || 3000;

const key = "Vuongdev@@";

// Middleware để phân tích và truy cập req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cấu hình template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./server/src/Views"));

// Sử dụng các tệp tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, "./server/public")));

// Cấu hình session
app.use(
  session({
    secret: key,
    resave: false,
    saveUninitialized: false,
  })
);

// Khởi tạo Passport
app.use(passport.initialize());
app.use(passport.session());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Sử dụng router chính
// Sử dụng router chính
// Sử dụng router chính
// Sử dụng router chính
app.use("/", mainRoutes);

// Sử dụng api
app.use("/api/", apiOphim);

// Sử dụng Next.js
nextApp.prepare().then(() => {
  // Xử lý các yêu cầu Next.js
  app.get("*", (req, res) => {
    return nextHandle(req, res);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ứng dụng của bạn đang chạy trên cổng: ${port}`);
  });
});

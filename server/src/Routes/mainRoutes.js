const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Sử dụng tên gốc của tệp làm tên tệp lưu trữ
  },
});

const upload = multer({ storage: storage });
const mainController = require("../Controllers/mainController");
const loginController = require("../Controllers/loginController");
const movieController = require("../Controllers/movieController");
const cpUpload = upload.fields([
  { name: "images", maxCount: 10 },
  { name: "clip", maxCount: 1 },
]);

router.get("/oadmin", isAuthenticated, mainController.home);

router.get("/oadmin/login", loginController.login);
router.post("/oadmin/login", loginController.getUserlogin);
// router.get("/oadmin/dangky", loginController.dangky);
// router.get("/logout", loginController.logout);
// router.get("/quenmk", loginController.quenmk);

router.get("/oadmin/movie", isAuthenticated, movieController.getMovie);
router.get(
  "/oadmin/movie/show",
  isAuthenticated,
  movieController.getMovieShowId
);
router.get("/oadmin/movie/add", isAuthenticated, movieController.getMovieAdd);

router.post(
  "/oadmin/movie/add",
  isAuthenticated,
  cpUpload,
  movieController.postMovieAdd
);

// Middleware xác thực người dùng
function isAuthenticated(req, res, next) {
  if (req.session.isAuthenticated === true) {
    return next();
  } else {
    res.redirect("/oadmin/login");
  }
}

module.exports = router;

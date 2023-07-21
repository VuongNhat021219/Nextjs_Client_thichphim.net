const { Login } = require("../Models/Login");

const login = (req, res) => {
  res.render("Login/login");
};
const getUserlogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await Login(email, password);
  if (user !== null) {
    req.session.isAuthenticated = true;
    req.session.user = user;

    res.redirect("/oadmin/");
  } else {
    // Xác thực không thành công
    req.session.isAuthenticated = true;
  }
};
const dangky = (req, res) => {
  res.render("Login/register");
};
const quenmk = (req, res) => {
  res.render("Login/quenmk");
};
const loginout = (req, res) => {
  // Xóa phiên đăng nhập
  // req.session.destroy();
  res.render("Login/login");
};

module.exports = {
  login,
  dangky,
  quenmk,
  getUserlogin,
  loginout,
};

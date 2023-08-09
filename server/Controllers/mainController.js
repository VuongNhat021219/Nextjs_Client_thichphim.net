const mainModel = require("../Models/Home");

exports.home = (req, res) => {
  res.render("Pages/mainView", {
    user: [
      {
        username: "vuong",
        email: "admin@example.com",
        password: "dfsdfsad",
        age: "23",
        address: "hà nội",
        phone: "0383333732",
      },
    ],
  });

  // console.log(req.session.user);
};

exports.getMains = (req, res) => {
  const Mains = mainModel.getMains();
  res.render("Mains", { Mains });
};

exports.getMainById = (req, res) => {
  const id = req.params.id;
  const Main = mainModel.getMainById(id);
  if (Main) {
    res.render("Main", { Main });
  } else {
    res.status(404).send("Người dùng không tồn tại");
  }
};

exports.createMain = (req, res) => {
  const name = req.body.name;
  const Main = mainModel.createMain(name);
  res.redirect("/Mains");
};

exports.updateMain = (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const updatedMain = mainModel.updateMain(id, name);
  if (updatedMain) {
    res.redirect("/Mains");
  } else {
    res.status(404).send("Người dùng không tồn tại");
  }
};

exports.deleteMain = (req, res) => {
  const id = req.params.id;
  const deletedMain = mainModel.deleteMain(id);
  if (deletedMain) {
    res.redirect("/Mains");
  } else {
    res.status(404).send("Người dùng không tồn tại");
  }
};

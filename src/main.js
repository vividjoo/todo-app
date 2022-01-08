const Router = require("express").Router();
require("express")().set("view engin", "ejs");
require("express")().set("views", "./views");
require("express")().use(require("express").json());
require("express")().use(require("express").urlencoded({ extended: true }));

Router.get("/", (req, res) => {
  res.render("main", { name: "이름", age: 12 });
});

module.exports = Router;

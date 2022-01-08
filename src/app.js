const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const ejs = require("ejs");
const pg = require("../database/db");
const main = require("./main");
const qna = require("./qna");

const http = require("http").createServer(app);

// config environment
dotenv.config({ path: "../.env" });

// middleware
// app.use(express.static(path.join(__dirname, "..", "/front_app/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "/views")));
app.use("/main/", main);
app.use("/qna/", qna);

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  console.log(req.body);
  res.render("index");
});

app.listen(3000, () => {
  console.log(`server on`);
});

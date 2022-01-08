const express = require("express");
const mongoose = require("mongoose");
const User = require("./script");
const app = express();

mongoose.connect("mongodb://localhost/pagination", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", async () => {
  if ((await User.countDocuments().exec()) > 0) {
    return;
  }
  Promise.all([
    User.create({ name: "user 1" }),
    User.create({ name: "user 2" }),
    User.create({ name: "user 3" }),
    User.create({ name: "user 4" }),
    User.create({ name: "user 5" }),
    User.create({ name: "user 6" }),
    User.create({ name: "user 7" }),
    User.create({ name: "user 8" }),
    User.create({ name: "user 9" }),
    User.create({ name: "user 10" }),
    User.create({ name: "user 11" }),
    User.create({ name: "user 12" }),
    User.create({ name: "user 13" }),
  ])
    .then(() => {
      console.log(`Added Users`);
    })
    .catch((err) => {
      console.error(err);
    });
});

let users = [];
let posts = [];

for (let i = 1; i <= 21; i++) {
  users.push({ id: `${i}`, name: `user ${i}` });
}

for (let i = 1; i <= 21; i++) {
  posts.push({ id: `${i}`, name: `posts ${i}` });
}

app.get("/posts", paginatedResults(posts), (req, res) => {
  console.log(1);
  res.json(res.paginatedResults);
  console.log(2);
});

function paginatedResults(model) {
  console.log("middle ware");
  let queryString = `SELECT * FROM `;
  return (req, res, next) => {
    console.log(4);
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < users.length) {
      results.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit,
      };
    }
    try {
      results.results = model.find().limit(limit).skip(startIndex).exec();
      res.paginatedResults = results;
      next();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}

app.get("/users", paginatedResults(users), (req, res) => {
  res.json(res.paginatedResults);
});

app.listen(3000);

const redis = require("redis");
// const client = redis.createClient();
const express = require("express");
const { urlencoded } = require("express");
const { randomInt } = require("crypto");

const Router = express.Router();

const redisInfo = {
  host: "127.0.0.1",
  port: 6379,
  db: 16, // Redis에서 사용하는 DB 번호
  password: "",
};

const client = redis.createClient(redisInfo);

Router.get("/", async (req, res) => {
  const { email } = req.body;

  res.json({ msg: email });
});

// module.exports = Router;

module.exports = class {
  constructor() {
    this._setRedis();
  }
};

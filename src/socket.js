var app = require("http").createServer(handler).listen(3000);
// const express = require("express");
var io = require("socket.io")(app);
var fs = require("fs");

function handler(req, res) {
  fs.readFile("index.html", function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading index.html");
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.on("connection", function (socket) {
  console.log("connection !!");
  // 1
  socket.emit("news", { tuy: "서버에서 보낸 메세지다 이누마" }, () => {
    console.log("emit callback");
  });

  socket.on("client login", function (data) {
    // 2
    console.log("client login : ", data);
  });

  socket.on("disconnect", function () {
    // 3
    console.log("접속이 종료되었습니다.");
  });
});

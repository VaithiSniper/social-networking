const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", function (req, res) {
  const filePath = path.join(__dirname, "..", "home.html");
  res.sendFile(filePath);
});

app.get("/groups", function (req, res) {
  const filePath = path.join(__dirname, "..", "groups.html");
  res.sendFile(filePath);
});

app.get("/members", function (req, res) {
  const filePath = path.join(__dirname, "..", "members.html");
  res.sendFile(filePath);
});

app.get("/photos", function (req, res) {
  const filePath = path.join(__dirname, "..", "photos.html");
  res.sendFile(filePath);
});

app.listen(3000);
console.log("Server started at 3k");
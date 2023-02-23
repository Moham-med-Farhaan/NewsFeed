const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT | 3000;

app.get("/", (req, res) => {
  req.statusCode = 200;
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/contact", (req, res) => {
  req.statusCode = 200;
  res.sendFile(path.join(__dirname, "contact.html"));
});
app.get("/about", (req, res) => {
  req.statusCode = 200;
  res.sendFile(path.join(__dirname, "about.html"));
});

app.listen(port, () => {
  console.log("Server started...");
});

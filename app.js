require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { response, request } = require("express");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const middleware = function (req, res, next) {
  console.log("Yeni bir istek geldi");
  next();
};

const middleware2 = function (req, res, next) {
  console.log("POST isteği için istek gönderildi.");
  next();
};


app.get("/hello", middleware, function (req, res) {
  console.log("Merhaba, get isteği attınız");
  res.json("Deneme");
});

app.put("/hello", middleware, function (req, res) {
  console.log("Merhaba, put isteği attınız");
  res.json("Deneme");
});

app.delete("/hello", middleware, function (req, res) {
  console.log("Merhaba, delete isteği attınız");
  res.json("Deneme");
});

app.post("/hello", middleware, middleware2, function (req, res) {
  console.log("Merhaba, post isteği attınız");
  res.json("Deneme");
});

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});

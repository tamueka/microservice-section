const express = require("express");
const app = express();

const response = {
  data: [],
  service: "Monolothic Service",
  arquitecture: "Monolithic",
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/", (req, res) => {
  response.data.push("Hello from express");
  return res.send(response);
});

app.get("/api/v1/users", (req, res) => {
  response.data.push("Samuel", "Alexis", "Jefrey");
  return res.send(response);
});

app.get("/api/v1/books", (req, res) => {
  response.data.push(
    "The clear coder",
    "Teh pragmatic programmer",
    "Soft skils"
  );
  return res.send(response);
});

app.get("/api/v1/cars", (req, res) => {
  response.data.push("Mazda", "Ferrari", "Mercedes");
  return res.send(response);
});

module.exports = app;

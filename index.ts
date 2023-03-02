import { Application } from "express";

const express = require("express");

const app: Application = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server on running on ${PORT}`);
});

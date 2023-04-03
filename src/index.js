const express = require("express");

const celebrationController = require("./controllers/celebrationController");
const authController = require("./controllers/authController");

const app = express();

app.use(express.json());

app.use("/celebration", celebrationController);
app.use("/auth", authController);

module.exports = app;

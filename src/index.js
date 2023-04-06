const express = require("express");

const celebrationController = require("./controllers/celebrationController");
const authController = require("./controllers/authController");
const cartController = require("./controllers/cartController");

const app = express();

app.use(express.json());

app.use("/celebration", celebrationController);
app.use("/auth", authController);
app.use("/cart", cartController);

module.exports = app;

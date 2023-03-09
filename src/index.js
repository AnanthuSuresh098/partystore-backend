const express = require("express");

const celebrationController = require("./controllers/celebrationController");

const app = express();

app.use(express.json());
app.use("/celebration", celebrationController);

module.exports = app;

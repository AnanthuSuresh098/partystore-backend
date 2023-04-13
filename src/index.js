const express = require("express");
const cors = require("cors");

const celebrationController = require("./controllers/celebrationController");
const authController = require("./controllers/authController");
const cartController = require("./controllers/cartController");
const wishlistController = require("./controllers/wishlistController");

const app = express();


app.use(express.json());

app.use(cors());

app.use("/celebration", celebrationController);
app.use("/auth", authController);
app.use("/cart", cartController);
app.use("/wishlist", wishlistController);

module.exports = app;

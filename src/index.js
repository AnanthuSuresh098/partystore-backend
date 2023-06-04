const express = require("express");
const cors = require("cors");

const celebrationController = require("./controllers/celebrationController");
const authController = require("./controllers/authController");
const cartController = require("./controllers/cartController");
const wishlistController = require("./controllers/wishlistController");
const birthdayController = require("./controllers/birthdayController");
const productsController = require("./controllers/productsController");
const festivalController = require("./controllers/festivalController");
const uploadController = require("./controllers/uploadController");

const app = express();
app.use(cors());

app.use(express.json());



app.use("/celebration", celebrationController);
app.use("/festival", festivalController);
app.use("/auth", authController);
app.use("/cart", cartController);
app.use("/wishlist", wishlistController);
app.use("/birthday", birthdayController);
app.use("/products", productsController);
app.use("/upload", uploadController);

module.exports = app;

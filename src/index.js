const express = require("express");
const cors = require("cors");
// const path = require("path");

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

   //aws server config
// const _dirname = path.dirname("");
// const buildPath = path.join(_dirname, "../client/build");

// app.use(express.static(buildPath));

// app.get("/*", function (req, res) {
//   res.sendFile(
//     path.join(__dirname, "../client/build/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

app.use("/celebration", celebrationController);
app.use("/festival", festivalController);
app.use("/auth", authController);
app.use("/cart", cartController);
app.use("/wishlist", wishlistController);
app.use("/birthday", birthdayController);
app.use("/products", productsController);
app.use("/upload", uploadController);

module.exports = app;

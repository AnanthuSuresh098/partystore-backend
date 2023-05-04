const express = require("express");

const router = express.Router();

const Products = require("../models/products.model");

// All Products Route

router.get("", async (req, res) => {
  try {
    const products = await Products.find().lean().exec();
    return res.send(products);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("", async (req, res) => {
  try {
    const product = await Products.create(req.body);
    return res.send({ product });
  } catch (err) {
    return res.status(500).send(err);
  }
});


module.exports = router;
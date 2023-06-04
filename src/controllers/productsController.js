const express = require("express");

const router = express.Router();

const Products = require("../models/products.model");

const ProductCategory = require("../models/productCategory.model");

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

router.delete("/:id", async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send(err);
  }
});

// Products Category Routes

router.post("/:category", async (req, res) => {
  try {
    const productcategory = await ProductCategory.create(req.body);
    return res.send({ productcategory });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:category", async (req, res) => {
  try {
    const productcategory = await ProductCategory.find({
      category: req.params.category
    })
      .lean()
      .exec();
    return res.send(productcategory);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
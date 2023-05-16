const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProductCategory = mongoose.model(
  "productcategory",
  productCategorySchema
);

module.exports = ProductCategory;

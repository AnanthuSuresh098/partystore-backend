const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    image: { type: String, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Products = mongoose.model("products", productSchema);

module.exports = Products;
const mongoose = require("mongoose");

const festivalCategorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: [{ type: String, required: true }],
    package: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    inclusions: [{ type: String, required: true }],
    exclusions: [{ type: String, required: true }],
    ad_ons: [
      {
        title: { type: String, required: true },
        description: { type: String, required: false },
        price: { type: Number, required: true },
        rating: { type: Number, required: true },
        additional_info: { type: String, required: false },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const FestivalCategory = mongoose.model(
  "festivalcategory",
  festivalCategorySchema
);

module.exports = FestivalCategory;

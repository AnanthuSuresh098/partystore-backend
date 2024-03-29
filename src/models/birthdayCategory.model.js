const mongoose = require("mongoose");

const birthdayCategorySchema = new mongoose.Schema(
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
        image:{ type: String, required: true },
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

const BirthdayCategory = mongoose.model(
  "birthdaycategory",
  birthdayCategorySchema
);

module.exports = BirthdayCategory;

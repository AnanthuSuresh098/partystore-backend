const mongoose = require("mongoose");

const festivalSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Festivals = mongoose.model("festival", festivalSchema);

module.exports = Festivals;

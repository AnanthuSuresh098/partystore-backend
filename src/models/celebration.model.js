const mongoose = require("mongoose");

const celebrationSchema = new mongoose.Schema(
  {
    package: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Celebrations = mongoose.model("celebration", celebrationSchema);

module.exports = Celebrations;

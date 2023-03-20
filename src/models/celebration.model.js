const mongoose = require("mongoose");

const celebrationSchema = new mongoose.Schema(
  {
    category:{ type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Celebrations = mongoose.model("celebration", celebrationSchema);

module.exports = Celebrations ;

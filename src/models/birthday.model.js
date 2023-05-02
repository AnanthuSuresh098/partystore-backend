const mongoose = require("mongoose");

const birthdaySchema = new mongoose.Schema(
  {
    theme: { type: String, required: true },
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

const Birthdays = mongoose.model("birthday", birthdaySchema);

module.exports = Birthdays;

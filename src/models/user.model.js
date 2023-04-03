const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    shippingdetails: {
      name: { type: String, required: false },
      phone: { type: Number, required: false },
      address: { type: String, required: false },
      state: { type: String, required: false },
      pincode: { type: Number, required: false },
    },
    paymentdetails: {
      cardname: { type: String, required: false },
      cardnumber: { type: Number, required: false },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Users = mongoose.model("user", userSchema);
module.exports = Users;

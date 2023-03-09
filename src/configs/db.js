const mongoose = require("mongoose");

module.exports = () => {
    mongoose.set("strictQuery", false);
  return mongoose.connect(
    "mongodb+srv://partystore01789:TXew9enmflo9Om7N@cluster0.zwtsctq.mongodb.net/?retryWrites=true&w=majority"
  );
};
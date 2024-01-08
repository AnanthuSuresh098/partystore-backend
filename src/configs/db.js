const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// const MONGO_URL = process.env.MONGO_URL;

module.exports = () => {
    mongoose.set("strictQuery", false);
  return mongoose.connect("mongodb+srv://partystore01789:OdHOBOOJheBwSd9A@cluster0.zwtsctq.mongodb.net/?retryWrites=true&w=majority",{
    useUnifiedTopology:true,useNewUrlParser:true
  });
};
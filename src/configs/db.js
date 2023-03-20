const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

module.exports = () => {
    mongoose.set("strictQuery", false);
  return mongoose.connect(MONGO_URL,{
    useUnifiedTopology:true,useNewUrlParser:true
  });
};
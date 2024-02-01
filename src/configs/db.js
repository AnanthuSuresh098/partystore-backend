const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// const MONGO_URL = process.env.MONGO_URL;


module.exports = () => {
    mongoose.set("strictQuery", false);
  return mongoose.connect(
    "mongodb+srv://vikram:hy277Lx4JQQBTIMF@serverlessinstance0.ud14vdb.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
};
const app = require("./index");
const connect = require("./configs/db");
// const dotenv =require("dotenv");

// dotenv.config();

// const PORT=process.env.PORT||4000;

app.listen(8000, async () => {
  try {
    await connect();
    console.log(`listening on port 8000`);
  } catch (err) {
    console.log(err);
  }
});

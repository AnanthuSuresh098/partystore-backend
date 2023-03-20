const app = require("./index");
const connect = require("./configs/db");
const dotenv =require("dotenv");

dotenv.config();

const PORT=process.env.PORT||4000;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening on port ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});

const app = require("./index");
const connect = require("./configs/db");

app.listen(1235, async () => {
  try {
    await connect();
    console.log("listening on port 1235");
  } catch (err) {
    console.log(err);
  }
});

const app=require("./index")

app.listen(1235,()=>{
    try {
    console.log("listening on port 1235");
  } catch (err) {
    console.log(err);
  }
})
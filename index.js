const express = require("express");
require('dotenv').config()
const app = express();

const cors=require("cors");
app.use(express.json());

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require("mongoose");




mongoose  
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

app.use(cors())

//send response api is working 
app.get("/", (req, res) => {
  res.send("API is working.");
});

app.use("/api/auth", require("./routes/auth"));


// app.use("/getprice", require("./routes/getprice"));
// app.use("/auth", require("./routes/auth"));
// app.use("/test", require("./routes/testing/test"));
// app.use('/',(req,res)=>{
//   res.send("backend is up and running")
//   })

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening at ${PORT}`));

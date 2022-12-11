const express = require("express");
require("dotenv").config();
const app = express();

const cors = require("cors");
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

  const authMiddleware = require("./middleware/auth");

app.use(cors());

//send response api is working
app.get("/", (req, res) => {
  res.send("API is working");
});

//api for authentication

app.use("/api/auth", require("./routes/auth"));


 
//api for news
app.use("/api/news", require("./routes/news"));

//endpoint for events
app.use("/api/events", require("./routes/Events"));




app.use(["/api/officer","/api/officials"],authMiddleware)
app.use("/api/officer", require("./routes/officer"));
//endpoint for officials
app.use("/api/officials", require("./routes/Officials"));


//endpoint for notifications
app.use("/api/notifications", require("./routes/Notifications"));


//get score
app.use("/api/score", require("./routes/score"));

// app.use("/getprice", require("./routes/getprice"));
// app.use("/auth", require("./routes/auth"));
// app.use("/test", require("./routes/testing/test"));
// app.use('/',(req,res)=>{
//   res.send("backend is up and running")
//   })

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening at ${PORT}`));

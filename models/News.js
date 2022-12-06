const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const News = new Schema({
  title: {
    type: String,
  },
 

});

const NewsSchema = mongoose.model("News", News);
module.exports = NewsSchema;

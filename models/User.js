const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  sex: {
    type: String,
  },
  place: {
    type: String,
  },
  lsgi: {
    type: String,
  },
  localbody: {
    type: String,
  },
  artEvents:{
    type: [String],
  },
  sportsEvents:{
    type: [String],
  },
});

const UserSchema = mongoose.model("User", User);
module.exports = UserSchema;

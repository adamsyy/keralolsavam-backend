const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  date: {
    type: String,
  },
  sex: {
    type: String,
  },
  age: {
    type: String,
  },
  lsgi: {
    type: String,
  },
  localbody: {
    type: String,
  },
  place: {
    type: String,
  },
  artEvents: {
    type: [String],
  },
  sportsEvents: {
    type: [String],
  },

  
});

const UserSchema = mongoose.model("User", User);
module.exports = UserSchema;

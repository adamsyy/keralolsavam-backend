const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Notification= new Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
    },
 

});

const NotificationSchema = mongoose.model("Notification", Notification);
module.exports = NotificationSchema;

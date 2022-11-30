
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const User= new Schema({
    name:{
        type:String,
    
      },
      address:
        {
            type:String,
        },
        sex:
        {
            type:String,
        },
        location:
        {
            type:String,
        },
        panchayat:
        {
            type:String,
        },
        
  
  
  });

  const UserSchema = mongoose.model("User", User);
module.exports = UserSchema;
  
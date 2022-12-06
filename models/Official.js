const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Official = new Schema({
 
 email:
    {
        type:String,
    },
    name:
    {
        type:String,
    },
    //stores ids of events that are alloted to the official
    events:[String],
    
    


});

const OfficialSchema = mongoose.model("Official", Official);
module.exports = OfficialSchema;

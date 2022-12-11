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
    isAdmin:    
    {
        type:Boolean,
        default:false
    },
    //stores ids of events that are alloted to the official
    events:[Object],
    
    


});

const OfficialSchema = mongoose.model("Official", Official);
module.exports = OfficialSchema;

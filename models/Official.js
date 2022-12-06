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
    
    


});

const OfficialSchema = mongoose.model("Official", Official);
module.exports = OfficialSchema;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Events = new Schema({
 gender: {
    type: String,
    },
    name:
    {
        type:String,
    },
    status:
    {
        type:String,
    },
    isarts
    :
    {
        type:Boolean,
    },
    chestno:
    {
        type:Number,
    },
    venue:
    {
        type:String,
    },
    winners:[String],
    time:
    {
        type:String,
    },



 

});

const EventsSchema = mongoose.model("Events", Events);
module.exports = EventsSchema;

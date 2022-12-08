const EventsSchema=require('../../models/Events');

module.exports.Getevents=async(req,res)=>{
    EventsSchema.find()
    .then((events)=>{
        res.status(200).json(events)
    })
    .catch((err)=>{
        res.status(400).json({message:"error",err})
    })
}

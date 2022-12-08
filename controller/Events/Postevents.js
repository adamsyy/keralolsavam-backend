const EventsSchema=require('../../models/Events');

module.exports.Postevents=async(req,res)=>{
    var { gender,
            name,
            status,
            isarts, chestno,venue,
            time }=req.body;
    const events=new EventsSchema({
        gender,
        name,
        status,
        isarts, chestno,venue,
        time
    })
    events.save()
    .then((events)=>{
        res.status(200).json({message:"events saved",events})
    })
    .catch((err)=>{
        res.status(400).json({message:"error",err})
    })
}
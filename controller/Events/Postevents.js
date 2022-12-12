const EventsSchema=require('../../models/Events');
const OfficialSchema=require('../../models/Official');


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
    // const official = await OfficialSchema.findOne({ email: req.user.email });
    // console.log(official);
    // if (!official) {
    //   return res.status(400).json({ message: "not authorized" });
    // }
    events.save()
    .then((events)=>{
        res.status(200).json({message:"events saved",events})
    })
    .catch((err)=>{
        res.status(400).json({message:"error",err})
    })
}
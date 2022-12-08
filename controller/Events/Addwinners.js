const EventsSchema=require('../../models/Events');

module.exports.Addwinners=async(req,res)=>{
try{
    const {id,winners}=req.body;
    const events=EventsSchema.findById(id);
    events.winners=winners;
    events.save();
    res.send(events);
}
catch(err){
    res
    .status(400)
    .send({error:err});

}
}

const OfficialSchema=require('../../models/Official');

module.exports.Deallotofficial=async(req,res)=>{
try{
    const Official=OfficialSchema.findById(req.params.id);
//remove the eventid from the array of events

    Official.evevnts.pull(req.body.eventid);
    Official.save();
    res.send(Official);
    
}
catch(err){
    res
    .status(400)
    .send({error:err});

}
}

const OfficialSchema=require('../../models/Official');

module.exports.Allotofficial=async(req,res)=>{
try{
    const Official=OfficialSchema.findById(req.params.id);
    Official.evevnts.push(req.body.eventid);
    Official.save();
    res.send(Official);
}
catch(err){
    res
    .status(400)
    .send({error:err});

}
}

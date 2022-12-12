const OfficialSchema=require('../../models/Official');

module.exports.Allotofficial=async(req,res)=>{
try{
    const Official=OfficialSchema.findById(req.params.id);
    // const official = await OfficialSchema.findOne({ email: req.user.email });
    // if (!official.isAdmin) {
    //   return res.status(400).json({ message: "not authorized" });
    // }
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

const OfficialSchema=require('../../models/Official');

module.exports.Getofficial=async(req,res)=>{
try{
    const official=await OfficialSchema.findOne({email:req.user.email});
    res.send(official);
}
catch(err){
    res
    .status(400)
    .send({error:err});
}
}

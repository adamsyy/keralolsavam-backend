const OfficialSchema=require('../../models/Official');

module.exports.Getofficials=async(req,res)=>{
try{
    const officials=await OfficialSchema.find();
    res.send(officials);
}
catch(err){
    res
    .status(400)
    .send({error:err});
}
}

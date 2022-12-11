const OfficialSchema=require('../../models/Official');

module.exports.Getofficials=async(req,res)=>{
try{
    const official = await OfficialSchema.findOne({ email: req.user.email });
    console.log(official);
    if (!official.isAdmin) {
      return res.status(400).json({ message: "not authorized" });
    }
    const officials=await OfficialSchema.find();
    res.send(officials);
}
catch(err){
    res
    .status(400)
    .send({error:err});
    console.log(err);
}
}

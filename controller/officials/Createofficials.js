const OfficialSchema=require('../../models/Official');

module.exports.Createofficials=async(req,res)=>{
try{
    const {email,name,events}=req.body;
    const Official = await OfficialSchema.findOne({ email: req.user.email });
    if (!Official.isAdmin) {
      return res.status(400).json({ message: "not authorized" });
    }
    const official=new OfficialSchema({
        email,
        name,
        events
    })
    official.save()
    res.send(official);
}
catch(err){
    res
    .status(400)
    .send({error:err});
}
}

    
  


const OfficialSchema=require('../../models/Official');

module.exports.Createofficials=async(req,res)=>{
try{
    const {email,name,events}=req.body;
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

    
  


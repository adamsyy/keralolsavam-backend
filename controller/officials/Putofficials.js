const OfficialSchema=require('../../models/Official');

module.exports.Putofficials=async(req,res)=>{
try{
   

const {name,email,events}=req.body;
const official=OfficialSchema.findById(req.params.id);
official.name=name;
official.email=email;
official.events=events;
official.save();
res.send(official);
}
catch(err){
    res
    .status(400)
    .send({error:err});

}
}

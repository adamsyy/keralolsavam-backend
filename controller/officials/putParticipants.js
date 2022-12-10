

const Partcipant=require('../../models/partcipant');

module.exports.PutParticipants=async(req,res)=>{
try{
    console.log(req.body);
    const updates = req.body.map((user) => ({
        updateOne: {
          filter: { _id: user.id },
          update: { $set: user }
        }
      }));
      console.log(updates);
        const result = await Partcipant.bulkWrite(updates);
        console.log(result);
        res.send(result);
}
catch(err){
    res
    .status(400)
    .send({error:err});
    console.log(err)
}
}

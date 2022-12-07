const NewsSchema=require('../../models/News');

module.exports.Putnews=async(req,res)=>{
  try{
    console.log(req.params.id, req.body);
    const news =await NewsSchema.findOneAndUpdate({_id:req.params.id},{title:req.body.title}, {new:true});
     res.send(news);
  }
    catch(err){
      console.log(err);
        res
        .status(400)
        .send({error:err});

    }
    

}
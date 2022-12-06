const NewsSchema=require('../../models/News');

module.exports.Putnews=async(req,res)=>{
  try{
    const news=NewsSchema.findById(req.params.id);
    news.title=req.body.title;
    news.save();
     res.send(news);
  }
    catch(err){
        res
        .status(400)
        .send({error:err});

    }
    

}
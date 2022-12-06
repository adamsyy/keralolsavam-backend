const NewsSchema=require('../../modelS/News');

module.exports.Postnews=async(req,res)=>{
    var {title}=req.body;
    const news=new NewsSchema({
        title
    })
    news.save()
    .then((news)=>{
        res.status(200).json({message:"news saved",news})
    })
    .catch((err)=>{
        res.status(400).json({message:"error",err})
    })
}


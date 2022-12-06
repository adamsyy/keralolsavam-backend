const NewsSchema=require('../../modelS/News');

module.exports.Getnews=async(req,res)=>{
    NewsSchema.find()
    .then((news)=>{
        res.status(200).json({message:"news found",news})
    })
    .catch((err)=>{
        res.status(400).json({message:"error",err})
    })
}
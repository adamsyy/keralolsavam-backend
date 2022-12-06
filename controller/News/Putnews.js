const NewsSchema=require('../../modelS/News');

module.exports.Putnews=async(req,res)=>{
    NewsSchema.findByIdAndUpdate(req
        .params.id)
    .then((news)=>{
        res.status(200).json({message:"news updated",news})
    }
    )
    .catch((err)=>{
        res.status(400).json({message:"error",err})
    }
    )
}
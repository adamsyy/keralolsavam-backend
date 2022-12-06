const NewsSchema=require('../../modelS/News');

module.exports.Deletenews=async(req,res)=>{

    NewsSchema.findByIdAndDelete(req.params.id)
    .then((news)=>{
        res.status(200).json({message:"news deleted",news})
    })
    .catch((err)=>{
        res.status(400).json({message:"error",err})
    })
}

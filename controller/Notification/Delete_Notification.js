const NotificationSchema=require('../../models/Notification');

module.exports.Delete_Notification=async(req,res)=>{

    NotificationSchema.findByIdAndDelete(req.params.id)
    .then((news)=>{
        res.status(200).json({message:"notification deleted",news})
    })
    .catch((err)=>{
        res.status(400).json({message:"error",err})
    })
}

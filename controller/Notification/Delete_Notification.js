const NotificationSchema = require("../../models/Notification");
const OfficialSchema = require("../../models/Official");

module.exports.Delete_Notification = async (req, res) => {
 const official = await OfficialSchema.findOne({ email: req.user.email });
  if (!official.isAdmin) {
    return res.status(400).json({ message: "not authorized" });
  }

  NotificationSchema.findByIdAndDelete(req.params.id)
    .then((news) => {
      res.status(200).json({ message: "notification deleted", news });
    })
    .catch((err) => {
      res.status(400).json({ message: "error", err });
    });
};

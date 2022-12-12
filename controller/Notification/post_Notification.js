const NotificationSchema = require("../../models/Notification");
const OfficialSchema = require("../../models/Official");

module.exports.post_Notification = async (req, res) => {
  try {
    const { title, link } = req.body;
    // const official = await OfficialSchema.findOne({ email: req.user.email });
    // if (!official.isAdmin) {
    //   return res.status(400).json({ message: "not authorized" });
    // }
    const notification = new NotificationSchema({ title, link });
    await notification.save();
    res.send(notification);
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err });
  }
};

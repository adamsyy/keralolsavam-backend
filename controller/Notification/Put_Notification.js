const NotificationSchema = require("../../models/Notification");
const OfficialSchema = require("../../models/Official");

module.exports.Put_Notification = async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const official = await OfficialSchema.findOne({ email: req.user.email });
    if (!official.isAdmin) {
      return res.status(400).json({ message: "not authorized" });
    }
    const notification = await NotificationSchema.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, link: req.body.link },
      { new: true }
    );
    res.send(notification);
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err });
  }
};

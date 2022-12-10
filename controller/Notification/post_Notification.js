const NotificationSchema= require("../../models/Notification");

module.exports.post_Notification = async (req, res) => {
  try {
    const { title, link } = req.body;
    const notification = new NotificationSchema({ title, link });
    await notification.save();
    res.send(notification);
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err });
  }
};
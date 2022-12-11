const NotificationSchema = require("../../models/Notification");

module.exports.Put_Notification = async (req, res) => {
  try {
    console.log(req.params.id, req.body);
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

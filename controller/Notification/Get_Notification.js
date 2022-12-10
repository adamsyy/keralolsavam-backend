const NotificationSchema = require("../../models/Notification");

module.exports.Get_Notification = async (req, res) => {
    try {
        const notification = await NotificationSchema.find();
        res.send(notification);
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: err });
    }
    };
    
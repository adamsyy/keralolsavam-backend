const EventsSchema = require("../../models/Events");

module.exports.Addwinners = async (req, res) => {
  try {
    var {  status, time } = req.body;
    const events = await EventsSchema.findOneAndUpdate(
      { _id: req.params.id },
      {
        winners: req.body.winners,
        time: time,
        status: status,
      }
    );

    res.status(200).json({ message: "events saved", events });
  } catch (err) {
    res.status(400).json({ message: "error", err });
  }
};


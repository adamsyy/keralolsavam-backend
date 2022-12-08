const OfficialSchema = require("../../models/Official");

module.exports.Putofficials = async (req, res) => {
  try {
    const { name, email, events } = req.body;
    const official = await OfficialSchema.findOneAndUpdate(
      { _id: req.params.id },
      { name: name, email: email, events: events },
      { new: true }
    );
    res.send(official);
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

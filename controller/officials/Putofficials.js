const OfficialSchema = require("../../models/Official");

module.exports.Putofficials = async (req, res) => {
  try {
    const { name, email, events } = req.body;
    const Official = await OfficialSchema.findOne({ email: req.user.email });
    
    if (!Official.isAdmin) {

      return res.status(400).json({ message: "not authorized" });
    }
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

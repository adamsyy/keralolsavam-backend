const UserSchema = require("../../models/User");

module.exports.editUser = async (req, res) => {
  try {
    var {
      name,
      phone,
      address,
      date,
      sex,
      age,
      lsgi,
      localbody,
      place,
      artEvents,
      sportsEvents,
    } = req.body;

    let updatedUser = await UserSchema.findOneAndUpdate(
      { _id: req.params.id },
      {
        name,
        phone,
        address,
        date,
        sex,
        age,
        lsgi,
        localbody,
        place,
        artEvents,
        sportsEvents,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: "error", err });
  }
};

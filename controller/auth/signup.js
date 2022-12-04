const UserSchema = require("../../models/User");

module.exports.signup = async (req, res) => {
  var { name, address, sex, place, lsgi,localbody, artEvents, sportsEvents } = req.body;

  const user = new UserSchema({
    name,
    address,
    sex,
    place,
    lsgi,
    localbody,
    artEvents,
    sportsEvents,
  });
  user
    .save()
    .then((user) => {
      res.status(200).json({ message: "user saved", user });
    })
    .catch((err) => {
      res.status(400).json({ message: "error", err });
    });
};

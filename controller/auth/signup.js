const UserSchema = require("../../models/User");

module.exports.signup = async (req, res) => {
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

  const user = new UserSchema({
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

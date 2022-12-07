const User = require("../../models/User");

module.exports.getAllUsers = async (req, res) => {
  try {
    const pagination = req.query.page ? req.query.page : 15;
    const pageNumber = req.query.page ? req.query.page : 1;
    const users = await User.find({})
      .skip((pageNumber - 1) * pagination)
      .limit(pagination);
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: "error", err });
  }
};

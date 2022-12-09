const User = require("../../models/User");
const Participant = require("../../models/partcipant");

module.exports.getAllUsers = async (req, res) => {
  try {
    const pagination = req.query.pagination ? req.query.pagination : 15;
    const pageNumber = req.query.page ? req.query.page : 1;
    const userCount = await User.countDocuments({});
    const users = await User.find({})
      .skip((pageNumber - 1) * pagination)
      .limit(pagination);

    res.status(200).json({users:users, pages:Math.ceil(userCount/pagination)});
  } catch (err) {
    res.status(400).json({ message: "error", err });
  }
  
};

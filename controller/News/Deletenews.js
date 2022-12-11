const NewsSchema = require("../../models/News");
const OfficialSchema = require("../../models/Official");

module.exports.Deletenews = async (req, res) => {
  const official = await OfficialSchema.findOne({ email: req.user.email });
  if (!official.isAdmin) {
    return res.status(400).json({ message: "not authorized" });
  }
  NewsSchema.findByIdAndDelete(req.params.id)
    .then((news) => {
      res.status(200).json({ message: "news deleted", news });
    })
    .catch((err) => {
      res.status(400).json({ message: "error", err });
    });
};

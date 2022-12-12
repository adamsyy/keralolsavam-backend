const NewsSchema = require("../../models/News");
const OfficialSchema = require("../../models/Official");
module.exports.Postnews = async (req, res) => {
  var { title } = req.body;
  // const official = await OfficialSchema.findOne({ email: req.user.email });
  // if (!official.isAdmin) {
  //   return res.status(400).json({ message: "not authorized" });
  // }
  const news = new NewsSchema({
    title,
  });
  news
    .save()
    .then((news) => {
      res.status(200).json({ message: "news saved", news });
    })
    .catch((err) => {
      res.status(400).json({ message: "error", err });
    });
};

const NewsSchema = require("../../models/News");
const OfficialSchema = require("../../models/Official");

module.exports.Putnews = async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    // const official = await OfficialSchema.findOne({ email: req.user.email });
    // if (!official.isAdmin) {
    //   return res.status(400).json({ message: "not authorized" });
    // }
    const news = await NewsSchema.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title },
      { new: true }
    );
    res.send(news);
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err });
  }
};

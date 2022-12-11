const UserSchema = require("../models/User");
const ParticipantSchema = require("../models/partcipant");

module.exports.Score = async (req, res) => {
  try {
    //const user= await UserSchema.findOne({_id:req.params.id})
    const participant = await ParticipantSchema.find({
      participant_id: req.params.id,
    });

    var arts_Score = 0;
    var sports_Score = 0;
    for (var i = 0; i < participant.length; i++) {
      if (participant[i].isarts == true) {
        arts_Score += parseInt(participant[i].score);
      } else {
        sports_Score += parseInt(participant[i].score);
      }
    }
    res.send({ arts_Score: arts_Score, sports_Score: sports_Score });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
};

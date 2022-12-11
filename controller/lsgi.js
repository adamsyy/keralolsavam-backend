const ParticipantSchema = require("../models/partcipant");

module.exports.lsgi = async (req, res) => {
  var block = 0;
  var block_arts = 0;
  var block_sports = 0;

  var muncipality = 0;
  var muncipality_arts = 0;
  var muncipality_sports = 0;

  var corporation = 0;
  var corporation_arts = 0;
  var corporation_sports = 0;

  const participants = await ParticipantSchema.find();

  for (var i = 0; i < participants.length; i++) {
    if (participants[i].localbody == "Block Panchayath") {
      block += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        block_arts += parseInt(participants[i].score);
      } else {
        block_sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Municipalities") {
      muncipality += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        muncipality_arts += parseInt(participants[i].score);
      } else {
        muncipality_sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Corporation") {
      corporation += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        corporation_arts += parseInt(participants[i].score);
      } else {
        corporation_sports += parseInt(participants[i].score);
      }
    }
  }

  res.send([
    {
      name: "Block Panchayath",
      total_score: block,
      arts_score: block_arts,
      sports_score: block_sports,
    },
     {
      name: "Municipalities",
      total_score: muncipality,
      arts_score: muncipality_arts,
      sports_score: muncipality_sports,
    },
     {
      name: "Corporation",
      total_score: corporation,
      arts_score: corporation_arts,
      sports_score: corporation_sports,
    },
]);
};

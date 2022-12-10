const Participant = require("../../models/partcipant")

module.exports.GetParticipants = async (req, res) => {
    try {
     console.log(req.params.id)
      const participant = await Participant.find({event_id:req.params.id})
      res.send(participant)
    } catch (err) {
      res.status(400).send({ error: err });
    }
  };
  
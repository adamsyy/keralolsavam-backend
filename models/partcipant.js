const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Participant = new Schema({
  participant_name: {
    type: String,
  },
  participant_id: {
    type: String,
  },
  event: {
    type: String,
  },
  event_id: {
    type: String,
  },
  serial_no: {
    type: String,
  },
  score: {
    type: String,
  }  ,
  isarts: {
    type: Boolean,
  },
});

const ParticipantSchema = mongoose.model("Participant", Participant);
module.exports = ParticipantSchema;
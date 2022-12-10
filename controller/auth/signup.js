const UserSchema = require("../../models/User");
const Participant = require("../../")


module.exports.signup = async (req, res) => {
 try{
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
  await user
    .save()
  const partcipant = new Participant({
    participant_name:name,
             participant_id:user._id,
             event:eventObj.name,
             event_id:eventObj._id,
             serial_no:0,
             score:0
  })
   
    
      res.status(200).json({ message: "user saved", user });

}catch(err) {
      res.status(400).json({ message: "error", err });
    }
};

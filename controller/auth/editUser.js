const UserSchema = require("../../models/User");
const Participant = require("../../models/partcipant");
const EventSchema = require("../../models/Events");

module.exports.editUser = async (req, res) => {
  try {
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

    let updatedUser = await UserSchema.findOneAndUpdate(
      { _id: req.params.id },
      {
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
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: "error", err });
    console.log(err);
  }

//   try{
//    const data = await UserSchema.find({})
//    data.forEach(
//     (user)=>{
//       user.artEvents.forEach(
//        async (event)=>{
//           let eventObj = await EventSchema.findOne({name:event})
//           let participant = new Participant({
//             participant_name:user.name,
//             participant_id:user._id,
//             event:eventObj.name,
//             event_id:eventObj._id,
//             serial_no:0,
//             score:0,
//             isarts:true,
//             localbody:user.localbody,
//             lsgi:user.lsgi,
//           })
//           await participant.save()
//         }
//       )
//       user.sportsEvents.forEach(
//         async (event)=>{
//            let eventObj = await EventSchema.findOne({name:event})
//            let participant = new Participant({
//              participant_name:user.name,
//              participant_id:user._id,
//              event:eventObj.name,
//              event_id:eventObj._id,
//              serial_no:0,
//              score:0,
//               isarts:false,
//               localbody:user.localbody,
//               lsgi:user.lsgi,

//            })
//            await participant.save()
//          }
//        )
//     }
//    )

//    res.send("done")
//   }
//   catch(error){
//    console.log(error)
//   }

 };

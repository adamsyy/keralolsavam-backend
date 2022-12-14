const EventsSchema = require('../../models/Events');
const UserSchema = require('../../models/User');
const ParticipantSchema = require('../../models/partcipant');


module.exports.Geteventbyid = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await EventsSchema.findById(id);
        //get details of users who have registered for the event

        var users_list = [];

        const user = await ParticipantSchema.find({
            event_id: id
        });
        // for (var i = 0; i < user.length; i++) {
        //     if(event.isarts==true){

        //         for (var j = 0; j < user[i].artEvents.length; j++) {
        //             if (user[i].artEvents[j] == event.name) {
        //                 users_list.push(user[i]);
        //             }
        //         }
        //     }
        //     else{
        //         for (var j = 0; j < user[i].sportsEvents.length; j++) {
        //             if (user[i].sportsEvents[j] == event.name) {
        //                 users_list.push(user[i]);
        //             }
        //         }
        //     }
           

            
        // }

        res.send(
            {
                "event": event,
                "users": user
            }
        );
    }
    catch (err) {
        res
            .status(400)
            .send(err);

    }
}


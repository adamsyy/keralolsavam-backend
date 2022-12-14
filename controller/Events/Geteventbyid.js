const EventsSchema = require('../../models/Events');
const UserSchema = require('../../models/User');
const ParticipantSchema = require('../../models/partcipant');

module.exports.Geteventbyid = async (req, res) => {
    try {
        const { id } = req.params;
        let event = await EventsSchema.findById(id);
        let winners = await ParticipantSchema.find({event_id:req.params.id}).sort({score:-1}).collation({locale: "en_US", numericOrdering: true}).limit(3);
        
        //add property name to object inside winners array and assign its value the same as that of participant name
        for (var i = 0; i < winners.length; i++) {
            console.log("hello", winners[i].participant_name)
            let obj = {...winners[i]._doc, name: winners[i].participant_name};
            if(event.winners[i]==null || event.winners[i]?.name=="")event.winners[i]=obj;
        }   
        
        //get details of users who have registered for the event
        console.log(event.winners)
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
        console.log(err)
        res
            .status(400)
            .send(err);

    }
}


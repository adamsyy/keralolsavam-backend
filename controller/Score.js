const UserSchema = require("../models/User");
const ParticipantSchema = require("../models/partcipant");

module.exports.Score = async (req, res) => {
    try {
        //const user= await UserSchema.findOne({_id:req.params.id})
        const participants = await ParticipantSchema.find();

        var arts_Score = 0;
        var sports_Score = 0;
        var results = [];

        // for (var i = 0; i < participant.length; i++) {

        //   if (participant[i].isarts == true) {
        //     arts_Score += parseInt(participant[i].score);
        //   } else {
        //     sports_Score += parseInt(participant[i].score);
        //   }
        // }
        // res.send({ arts_Score: arts_Score, sports_Score: sports_Score });


        //get the score of each participant
        // class Score{
        //   constructor(participant,arts,sports){
        //     this.participant=participant;
        //     this.arts=arts;
        //     this.sports=sports;
        //   }
        // }

        //var one=new Score(participant[0],0,0);
        // console.log(one.participant.participant_name);
        //create hashmap named map
        var map = new Map();
        var arts = new Map();
        var sports = new Map();

        for (var i = 0; i < participants.length; i++) {
            //if map does not contain the participant_id
            if (!map.has(participants[i].participant_id)) {
                map.set((participants[i].participant_id), "false");
            }
            //if map contains the participant_id
            else {
            }

        }


            // }

            for (var i = 0; i < participants.length; i++) {

                if (participants[i].isarts == true) {

                    //if arts map does not contain the participant_id
                    if (!arts.has(participants[i].participant_id)) {
                        arts.set((participants[i].participant_id), parseInt(participants[i].score));
                    }
                    //if arts map contains the participant_id
                    else {
                        arts.set((participants[i].participant_id), arts.get(participants[i].participant_id) + parseInt(participants[i].score));
                    }



                } else {
                    //if sports map does not contain the participant_id
                    if (!sports.has(participants[i].participant_id)) {
                        sports.set((participants[i].participant_id), parseInt(participants[i].score));
                    }
                    //if sports map contains the participant_id
                    else {
                        sports.set((participants[i].participant_id), sports.get(participants[i].participant_id) + parseInt(participants[i].score));
                    }


                }

            }


            class Result {
                constructor(player, arts_score, sports_Score,total) {
                    this.player = player;
                    this.arts_score = arts_score;
                    this.sports_Score = sports_Score;
                    this.total=arts_score+sports_Score;
                }
            }

            var ids = new Set();
            for (var i = 0; i < participants.length; i++) {
                ids.add(participants[i].participant_id);



            }

            var idsArray = Array.from(ids);

            for (var i = 0; i < idsArray.length; i++) {
                //find the participant name
                var participant_details = await ParticipantSchema.findOne({ participant_id: idsArray[i] })
                var one = new Result(participant_details, arts.get(idsArray[i])??0, sports.get(idsArray[i])??0);
                results.push(one);
            }

          




        

        res.send(results);
    } catch (err) {
        res.send(err);
        console.log(err);
    }
};

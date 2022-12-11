const ParticipantSchema = require("../models/partcipant");

const User = require("../models/User");


module.exports.Localbody=async(req,res)=>{





  var  Angamaly;
  var  Alangad;
  var   Edappally;
  var  Koovappady;
  var  Kothamangalam;
  var   Paravur;
  var  Palluruthy;
  var  Pampakuda;
  var  Parakkadavu;
  var  Mulanthuruthy;
  var  Muvattupuzha;
  var  Vadavucode;
  var   Vazhakkulam;
  var  Vyppin;
  var  Aluva;
  var   Eloor;
  var   Kalamassery;
  var   Koottattukulam;
  var   Kothamangalam;
  var    Thrikkakkara;
    var  Thripunithura;
    var   NorthParavur;
    var   Piravam;
    var  Perumbavur;
    var  Maradu;
    var Muvattupuzha;
    var  Cochi;
    




    const users=await User.find();








    const participants = await ParticipantSchema.find();
   // console.log(participants[0].participant_id);
    for(var i=0;i<participants.length;i++){
        var det=participants[i].participant_id;
     
       for(var j=0;j<users.length;i++){
     
              if(det==users[j]._id){
                if(users[j].localbody=="Angamaly"){
                     Angamaly+=participants[i].score;
                }
                else if(users[j].localbody=="Alangad"){
                 Alangad+=participants[i].score;
                }
                else if(users[j].localbody=="Edappally"){
                 Edappally+=participants[i].score;
                }
                else if(users[j].localbody=="Koovappady"){
                 Koovappady+=participants[i].score;
                }
                else if(users[j].localbody=="Kothamangalam"){
                 Kothamangalam+=participants[i].score;
                }
                else if(users[j].localbody=="Paravur"){
                 Paravur+=participants[i].score;
                }
                else if(users[j].localbody=="Palluruthy"){
                 Palluruthy+=participants[i].score;
                }
                else if(users[j].localbody=="Pampakuda"){
                 Pampakuda+=participants[i].score;
                }
                else if(users[j].localbody=="Parakkadavu"){
                 Parakkadavu+=participants[i].score;
                }
                else if(users[j].localbody=="Mulanthuruthy"){
                 Mulanthuruthy+=participants[i].score;
                }
                else if(users[j].localbody=="Muvattupuzha"){
                 Muvattupuzha+=participants[i].score;
                }
                else if(users[j].localbody=="Vadavucode"){
                 Vadavucode+=participants[i].score;
                }
                else if(users[j].localbody=="Vazhakkulam"){
                 Vazhakkulam+=participants[i].score;
                }
                else if(users[j].localbody=="Vyppin"){
                 Vyppin+=participants[i].score;
                }
                else if(users[j].localbody=="Aluva"){
                 Aluva+=participants[i].score;
                }
                else if(users[j].localbody=="Eloor"){
                 Eloor+=participants[i].score;
                }
                else if(users[j].localbody=="Kalamassery"){
                 Kalamassery+=participants[i].score;
                }
                else if(users[j].localbody=="Koottattukulam"){
                 Koottattukulam+=participants[i].score;

       }
         else if(users[j].localbody=="Kothamangalam"){
                    Kothamangalam+=participants[i].score;
                    }
                    else if(users[j].localbody=="Thrikkakkara"){
                    Thrikkakkara+=participants[i].score;
                    }
                    else if(users[j].localbody=="Thripunithura"){
                    Thripunithura+=participants[i].score;
                    }
                    else if(users[j].localbody=="NorthParavur"){
                    NorthParavur+=participants[i].score;
                    }   
                    else if(users[j].localbody=="Piravam"){
                    Piravam+=participants[i].score;
                    }
                    else if(users[j].localbody=="Perumbavur"){
                    Perumbavur+=participants[i].score;
                    }
                    else if(users[j].localbody=="Maradu"){
                    Maradu+=participants[i].score;
                    }
                    else if(users[j].localbody=="Muvattupuzha"){
                    Muvattupuzha+=participants[i].score;
                    }
                    else if(users[j].localbody=="Cochi"){
                    Cochi+=participants[i].score;
                    }
                    else{
                        console.log("error");
                    }}}

         
    }
    res.send(
        {
            "Angamaly":Angamaly,
            "Alangad":Alangad,
            "Edappally":Edappally,

            "Koovappady":Koovappady,
            "Kothamangalam":Kothamangalam,
            "Paravur":Paravur,
            "Palluruthy":Palluruthy,
            "Pampakuda":Pampakuda,
            "Parakkadavu":Parakkadavu,
            "Mulanthuruthy":Mulanthuruthy,
            "Muvattupuzha":Muvattupuzha,
            "Vadavucode":Vadavucode,
            "Vazhakkulam":Vazhakkulam,
            "Vyppin":Vyppin,
            "Aluva":Aluva,
            "Eloor":Eloor,
            "Kalamassery":Kalamassery,

            "Koottattukulam":Koottattukulam,
            "Kothamangalam":Kothamangalam,
            "Thrikkakkara":Thrikkakkara,
            "Thripunithura":Thripunithura,
            "NorthParavur":NorthParavur,
            "Piravam":Piravam,
            "Perumbavur":Perumbavur,
            "Maradu":Maradu,

            "Muvattupuzha":Muvattupuzha,
            "Cochi":Cochi

        }
    )
}
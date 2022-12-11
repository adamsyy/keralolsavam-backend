const ParticipantSchema = require("../models/partcipant");

const User = require("../models/User");





module.exports.Localbody = async (req, res) => {



    var Angamaly;
    var Alangad=0;
    var Edappally;
    var Koovappady;
    var Kothamangalam;
    var Paravur;
    var Palluruthy;
    var Pampakuda;
    var Parakkadavu;
    var Mulanthuruthy;
    var Vadavucode;
    var Vazhakkulam;
    var Vyppin;
    var Aluva;
    var Eloor;
    var Kalamassery;
    var Koottattukulam;
    var Thrikkakkara;
    var Thripunithura;
    var NorthParavur;
    var Piravam;
    var Perumbavur;
    var Maradu;
    var Muvattupuzha;
    var Cochi;














    const participants = await ParticipantSchema.find();

    for (var i = 0; i < participants.length; i++) {
        if (participants[i].localbody == "Angamaly") {
    
            Angamaly += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Alangad") {
          
            Alangad += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Edappally") {

            Edappally += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Koovappady") {
            Koovappady += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Kothamangalam") {
            Kothamangalam += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Paravur") {
            Paravur += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Palluruthy") {
            Palluruthy += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Pampakuda") {
            Pampakuda += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Parakkadavu") {
            Parakkadavu += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Mulanthuruthy") {
            Mulanthuruthy += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Muvattupuzha") {
            Muvattupuzha += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Vadavucode") {
            Vadavucode += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Vazhakkulam") {
            Vazhakkulam += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Vyppin") {
            Vyppin += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Aluva") {
            Aluva += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Eloor") {

            Eloor += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Kalamassery") {
            Kalamassery += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Koottattukulam") {
            Koottattukulam += parseInt(participants[i].score);
        }

        else if (participants[i].localbody == "Thrikkakkara") {
            Thrikkakkara += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Thripunithura") {
            Thripunithura += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "NorthParavur") {
            NorthParavur += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Piravam") {
            Piravam += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Perumbavur") {
            Perumbavur += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Maradu") {
            Maradu += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Muvattupuzha") {
            Muvattupuzha += parseInt(participants[i].score);
        }
        else if (participants[i].localbody == "Cochi") {
            Cochi += parseInt(participants[i].score);
        }


    }




    res.send(
        {
            "Angamaly": Angamaly,
            "Alangad": Alangad,
            "Edappally": Edappally,

            "Koovappady": Koovappady,
            "Kothamangalam": Kothamangalam,
            "Paravur": Paravur,
            "Palluruthy": Palluruthy,
            "Pampakuda": Pampakuda,
            "Parakkadavu": Parakkadavu,
            "Mulanthuruthy": Mulanthuruthy,
            "Muvattupuzha": Muvattupuzha,
            "Vadavucode": Vadavucode,
            "Vazhakkulam": Vazhakkulam,
            "Vyppin": Vyppin,
            "Aluva": Aluva,
            "Eloor": Eloor,
            "Kalamassery": Kalamassery,

            "Koottattukulam": Koottattukulam,
            "Kothamangalam": Kothamangalam,
            "Thrikkakkara": Thrikkakkara,
            "Thripunithura": Thripunithura,
            "NorthParavur": NorthParavur,
            "Piravam": Piravam,
            "Perumbavur": Perumbavur,
            "Maradu": Maradu,

            "Muvattupuzha": Muvattupuzha,
            "Cochi": Cochi

        }
    )
}
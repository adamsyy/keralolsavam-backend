const ParticipantSchema = require("../models/partcipant");

const User = require("../models/User");

module.exports.Localbody = async (req, res) => {
  var Angamaly = 0;
  var Angamaly_Sports = 0;
  var Angamaly_Arts = 0;

  var Angamaly_Block = 0;
  var Angamaly_Block_Sports = 0;
  var Angamaly_Block_Arts = 0;

  var Alangad = 0;
  var Alangad_Sports = 0;
  var Alangad_Arts = 0;

  var Edappally = 0;
  var Edappally_Sports = 0;
  var Edappally_Arts = 0;

  var Koovappady = 0;
  var Koovappady_Sports = 0;
  var Koovappady_Arts = 0;

  var Kothamangalam = 0;
  var Kothamangalam_Sports = 0;
  var Kothamangalam_Arts = 0;

  var Kothamangalam_Block = 0;
  var Kothamangalam_Block_Sports = 0;
  var Kothamangalam_Block_Arts = 0;

  var Paravur = 0;
  var Paravur_Sports = 0;
  var Paravur_Arts = 0;

  var Palluruthy = 0;
  var Palluruthy_Sports = 0;
  var Palluruthy_Arts = 0;

  var Pampakuda = 0;
  var Pampakuda_Sports = 0;
  var Pampakuda_Arts = 0;

  var Parakkadavu = 0;
  var Parakkadavu_Sports = 0;
  var Parakkadavu_Arts = 0;

  var Mulanthuruthy = 0;
  var Mulanthuruthy_Sports = 0;
  var Mulanthuruthy_Arts = 0;

  var Vadavucode = 0;
  var Vadavucode_Sports = 0;
  var Vadavucode_Arts = 0;

  var Vazhakkulam = 0;
  var Vazhakkulam_Sports = 0;
  var Vazhakkulam_Arts = 0;

  var Vyppin = 0;
  var Vyppin_Sports = 0;
  var Vyppin_Arts = 0;

  var Aluva = 0;
  var Aluva_Sports = 0;
  var Aluva_Arts = 0;

  var Eloor = 0;
  var Eloor_Sports = 0;
  var Eloor_Arts = 0;

  var Kalamassery = 0;
  var Kalamassery_Sports = 0;
  var Kalamassery_Arts = 0;

  var Koottattukulam = 0;
  var Koottattukulam_Sports = 0;
  var Koottattukulam_Arts = 0;

  var Thrikkakkara = 0;
  var Thrikkakkara_Sports = 0;
  var Thrikkakkara_Arts = 0;

  var Thripunithura = 0;
  var Thripunithura_Sports = 0;
  var Thripunithura_Arts = 0;

  var Piravam = 0;
  var Piravam_Sports = 0;
  var Piravam_Arts = 0;

  var Perumbavur = 0;
  var Perumbavur_Sports = 0;
  var Perumbavur_Arts = 0;

  var Maradu = 0;
  var Maradu_Sports = 0;
  var Maradu_Arts = 0;

  var Muvattupuzha = 0;
  var Muvattupuzha_Sports = 0;
  var Muvattupuzha_Arts = 0;

  var Muvattupuzha_Block = 0;
  var Muvattupuzha_Block_Sports = 0;
  var Muvattupuzha_Block_Arts = 0;

  var Cochi = 0;
  var Cochi_Sports = 0;
  var Cochi_Arts = 0;

  var NorthParavur = 0;
  var NorthParavur_Sports = 0;
  var NorthParavur_Arts = 0;

  const participants = await ParticipantSchema.find();

  for (var i = 0; i < participants.length; i++) {
    if (
      participants[i].localbody == "Angamaly" &&
      participants[i].lsgi == "Municipality"
    ) {
      Angamaly += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Angamaly_Arts += parseInt(participants[i].score);
      } else {
        Angamaly_Sports += parseInt(participants[i].score);
      }
    } else if (
      participants[i].localbody == "Angamaly" &&
      participants[i].lsgi == "Block Panchayath"
    ) {
      Angamaly_Block += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Angamaly_Block_Arts += parseInt(participants[i].score);
      } else {
        Angamaly_Block_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Alangad") {
      Alangad += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Alangad_Arts += parseInt(participants[i].score);
      } else {
        Alangad_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Edappally") {
      Edappally += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Edappally_Arts += parseInt(participants[i].score);
      } else {
        Edappally_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Koovappady") {
      Koovappady += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Koovappady_Arts += parseInt(participants[i].score);
      } else {
        Koovappady_Sports += parseInt(participants[i].score);
      }
    } else if (
      participants[i].localbody == "Kothamangalam" &&
      participants[i].lsgi == "Municipality"
    ) {
      Kothamangalam += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Kothamangalam_Arts += parseInt(participants[i].score);
      } else {
        Kothamangalam_Sports += parseInt(participants[i].score);
      }
    } else if (
      participants[i].localbody == "Kothamangalam" &&
      participants[i].lsgi == "Block Panchayath"
    ) {
      Kothamangalam_Block += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Kothamangalam_Block_Arts += parseInt(participants[i].score);
      } else {
        Kothamangalam_Block_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Paravur") {
      Paravur += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Paravur_Arts += parseInt(participants[i].score);
      } else {
        Paravur_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Palluruthy") {
      Palluruthy += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Palluruthy_Arts += parseInt(participants[i].score);
      } else {
        Palluruthy_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Pampakuda") {
      Pampakuda += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Pampakuda_Arts += parseInt(participants[i].score);
      } else {
        Pampakuda_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Parakkadavu") {
      Parakkadavu += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Parakkadavu_Arts += parseInt(participants[i].score);
      } else {
        Parakkadavu_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Mulanthuruthy") {
      Mulanthuruthy += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Mulanthuruthy_Arts += parseInt(participants[i].score);
      } else {
        Mulanthuruthy_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Muvattupuzha") {
      Muvattupuzha += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Muvattupuzha_Arts += parseInt(participants[i].score);
      } else {
        Muvattupuzha_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Vadavucode") {
      Vadavucode += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Vadavucode_Arts += parseInt(participants[i].score);
      } else {
        Vadavucode_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Vazhakkulam") {
      Vazhakkulam += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Vazhakkulam_Arts += parseInt(participants[i].score);
      } else {
        Vazhakkulam_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Vyppin") {
      Vyppin += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Vyppin_Arts += parseInt(participants[i].score);
      } else {
        Vyppin_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Aluva") {
      Aluva += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Aluva_Arts += parseInt(participants[i].score);
      } else {
        Aluva_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Eloor") {
      Eloor += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Eloor_Arts += parseInt(participants[i].score);
      } else {
        Eloor_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Kalamassery") {
      Kalamassery += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Kalamassery_Arts += parseInt(participants[i].score);
      } else {
        Kalamassery_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Koottattukulam") {
      Koottattukulam += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Koottattukulam_Arts += parseInt(participants[i].score);
      } else {
        Koottattukulam_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Thrikkakkara") {
      Thrikkakkara += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Thrikkakkara_Arts += parseInt(participants[i].score);
      } else {
        Thrikkakkara_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Thripunithura") {
      Thripunithura += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Thripunithura_Arts += parseInt(participants[i].score);
      } else {
        Thripunithura_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "NorthParavur") {
      console.log("NorthParavur");
      NorthParavur += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        NorthParavur_Arts += parseInt(participants[i].score);
      } else {
        NorthParavur_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Piravam") {
      Piravam += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Piravam_Arts += parseInt(participants[i].score);
      } else {
        Piravam_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Perumbavur") {
      Perumbavur += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Perumbavur_Arts += parseInt(participants[i].score);
      } else {
        Perumbavur_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Maradu") {
      Maradu += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Maradu_Arts += parseInt(participants[i].score);
      } else {
        Maradu_Sports += parseInt(participants[i].score);
      }
    } else if (
      participants[i].localbody == "Muvattupuzha" &&
      participants[i].lsgi == "Municipality"
    ) {
      Muvattupuzha += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Muvattupuzha_Arts += parseInt(participants[i].score);
      } else {
        Muvattupuzha_Sports += parseInt(participants[i].score);
      }
    } else if (
      participants[i].localbody == "Muvattupuzha" &&
      participants[i].lsgi == "Block Panchayath"
    ) {
      Muvattupuzha_Block += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Muvattupuzha_Block_Arts += parseInt(participants[i].score);
      } else {
        Muvattupuzha_Block_Sports += parseInt(participants[i].score);
      }
    } else if (participants[i].localbody == "Cochi") {
      Cochi += parseInt(participants[i].score);
      if (participants[i].isarts == true) {
        Cochi_Arts += parseInt(participants[i].score);
      } else {
        Cochi_Sports += parseInt(participants[i].score);
      }
    }
  }

  res.send([
    {
      name: "Angamaly Municipality",
      total: Angamaly,
      arts: Angamaly_Arts,
      sports: Angamaly_Sports,
    },
    {
      name: "Angamaly Block Panchayath",
      total: Angamaly_Block,
      arts: Angamaly_Block_Arts,
      sports: Angamaly_Block_Sports,
    },
    {
      name: "Alangad",
      total: Alangad,
      arts: Alangad_Arts,
      sports: Alangad_Sports,
    },
    {
      name: "Edappally",
      total: Edappally,
      arts: Edappally_Arts,
      sports: Edappally_Sports,
    },
    {
      name: "Koovappady",
      total: Koovappady,
      arts: Koovappady_Arts,
      sports: Koovappady_Sports,
    },
    {
      name: "Kothamangalam Municipality",
      total: Kothamangalam,
      arts: Kothamangalam_Arts,
      sports: Kothamangalam_Sports,
    },
    {
      name: "Kothamangalam Block Panchayath",
      total: Kothamangalam_Block,
      arts: Kothamangalam_Block_Arts,
      sports: Kothamangalam_Block_Sports,
    },
    {
      name: "Paravur",
      total: Paravur,
      arts: Paravur_Arts,
      sports: Paravur_Sports,
    },
    {
      name: "Palluruthy",
      total: Palluruthy,
      arts: Palluruthy_Arts,
      sports: Palluruthy_Sports,
    },
    {
      name: "Pampakuda",
      total: Pampakuda,
      arts: Pampakuda_Arts,
      sports: Pampakuda_Sports,
    },
    {
      name: "Parakkadavu",
      total: Parakkadavu,
      arts: Parakkadavu_Arts,
      sports: Parakkadavu_Sports,
    },
    {
      name: "Mulanthuruthy",
      total: Mulanthuruthy,
      arts: Mulanthuruthy_Arts,
      sports: Mulanthuruthy_Sports,
    },

    {
      name: "Vadavucode",
      total: Vadavucode,
      arts: Vadavucode_Arts,
      sports: Vadavucode_Sports,
    },
    {
      name: "Vazhakkulam",
      total: Vazhakkulam,
      arts: Vazhakkulam_Arts,
      sports: Vazhakkulam_Sports,
    },
    {
      name: "Vyppin",
      total: Vyppin,
      arts: Vyppin_Arts,
      sports: Vyppin_Sports,
    },
    {
      name: "Aluva",
      total: Aluva,
      arts: Aluva_Arts,
      sports: Aluva_Sports,
    },

    {
      name: "Eloor",
      total: Eloor,
      arts: Eloor_Arts,

      sports: Eloor_Sports,
    },
    {
      name: "Kalamassery",
      total: Kalamassery,
      arts: Kalamassery_Arts,
      sports: Kalamassery_Sports,
    },
    {
      name: "Koottattukulam",
      total: Koottattukulam,
      arts: Koottattukulam_Arts,

      sports: Koottattukulam_Sports,
    },
    {
      name: "Thrikkakkara",
      total: Thrikkakkara,
      arts: Thrikkakkara_Arts,
      sports: Thrikkakkara_Sports,
    },
    {
      name: "Thripunithura",
      total: Thripunithura,
      arts: Thripunithura_Arts,
      sports: Thripunithura_Sports,
    },
    {
      name: "Piravam",
      total: Piravam,
      arts: Piravam_Arts,
      sports: Piravam_Sports,
    },
    {
      name: "Perumbavur",
      total: Perumbavur,
      arts: Perumbavur_Arts,
      sports: Perumbavur_Sports,
    },
    {
      name: "Maradu",
      total: Maradu,
      arts: Maradu_Arts,

      sports: Maradu_Sports,
    },
    {
      name: "Muvattupuzha Municipality",
      total: Muvattupuzha,
      arts: Muvattupuzha_Arts,
      sports: Muvattupuzha_Sports,
    },
    {
      name: "Muvattupuzha Block Panchayath",
      total: Muvattupuzha_Block,
      arts: Muvattupuzha_Block_Arts,
      sports: Muvattupuzha_Block_Sports,
    },
    {
      name: "Cochi",
      total: Cochi,
      arts: Cochi_Arts,
      sports: Cochi_Sports,
    },
    {
      name: "North Paravur",
      total: NorthParavur,
      arts: NorthParavur_Arts,
      sports: NorthParavur_Sports,
    },
  ]);
};

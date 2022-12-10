
const {Getofficial}=require('../controller/officials/getOfficial');
const { GetParticipants } = require('../controller/officials/getParticipants');



const router = require("express").Router(); 

router.get("/", Getofficial)
router.get("/participants/:id", GetParticipants)



module.exports = router;

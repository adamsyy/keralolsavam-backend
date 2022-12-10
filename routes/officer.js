
const {Getofficial}=require('../controller/officials/getOfficial');
const { GetParticipants } = require('../controller/officials/getParticipants');
const { PutParticipants } = require('../controller/officials/putParticipants');


const router = require("express").Router(); 

router.get("/", Getofficial)
router.get("/participants/:id", GetParticipants)
router.put("/participants/:id", PutParticipants);



module.exports = router;

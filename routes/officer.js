
const {Getofficial}=require('../controller/officials/getOfficial');



const router = require("express").Router(); 

router.get("/", Getofficial)



module.exports = router;

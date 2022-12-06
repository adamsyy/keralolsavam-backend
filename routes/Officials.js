const {Allotofficial}=require('../controller/officials/Allotevent');
const {Deallotofficial}=require('../controller/officials/Deallotevent');

const router = require("express").Router(); 

router.post("/allot/:id", Allotofficial);
router.post("/deallot/:id", Deallotofficial);

module.exports = router;

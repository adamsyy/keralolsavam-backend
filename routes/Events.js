const {Getevents}=require('../controller/Events/Getevents');
const {Postevents}=require('../controller/Events/Postevents');

const router = require("express").Router();

router.post("/", Postevents);
router.get("/", Getevents);

module.exports = router;
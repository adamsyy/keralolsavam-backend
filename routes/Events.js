const {Getevents}=require('../controller/Events/Getevents');
const {Postevents}=require('../controller/Events/Postevents');
const {Addwinners}=require('../controller/Events/Addwinners');

const router = require("express").Router();

router.post("/", Postevents);
router.get("/", Getevents);
router.put("/", Addwinners);

module.exports = router;
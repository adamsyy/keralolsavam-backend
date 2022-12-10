const {Getevents}=require('../controller/Events/Getevents');
const {Postevents}=require('../controller/Events/Postevents');
const {Addwinners}=require('../controller/Events/Addwinners');
const {Geteventbyid}=require('../controller/Events/Geteventbyid');

const router = require("express").Router();

router.post("/", Postevents);
router.get("/", Getevents);
router.put("/:id", Addwinners);
router.get("/:id", Geteventbyid);


module.exports = router;
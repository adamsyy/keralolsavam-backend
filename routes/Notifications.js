const {Get_Notification}= require("../controller/Notification/Get_Notification");
const {post_Notification}= require("../controller/Notification/Post_Notification");


const router = require("express").Router();

router.post("/", post_Notification);
router.get("/", Get_Notification);

module.exports = router;


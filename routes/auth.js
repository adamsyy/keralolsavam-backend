const {signup}=require('../controller/auth/signup')
const {getAllUsers}=require('../controller/auth/getAllUsers')
const router = require("express").Router();


router.post("/signup", signup);
router.get("/getAllUsers", getAllUsers);

module.exports = router;
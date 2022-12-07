const {signup}=require('../controller/auth/signup')
const {getAllUsers}=require('../controller/auth/getAllUsers')
const {editUser}=require('../controller/auth/editUser')
const router = require("express").Router();


router.post("/signup", signup);
router.get("/getAllUsers", getAllUsers);
router.put("/updateUser", editUser);

module.exports = router;
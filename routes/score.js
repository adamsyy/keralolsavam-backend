const {Score}=require('../controller/Score')


const router = require("express").Router();


router.get('/',Score)

module.exports=router

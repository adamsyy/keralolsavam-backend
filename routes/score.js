const {Score}=require('../controller/Score')


const router = require("express").Router();


router.get('/:id',Score)

module.exports=router

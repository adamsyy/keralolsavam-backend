const {Score}=require('../controller/Score')
const {Localbody}=require('../controller/Localbody')


const router = require("express").Router();


router.get('/',Score)
router.get('/localbody',Localbody)

module.exports=router

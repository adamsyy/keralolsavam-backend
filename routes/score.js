const {Score}=require('../controller/Score')
const {Localbody}=require('../controller/Localbody')
const {lsgi}=require('../controller/lsgi')


const router = require("express").Router();


router.get('/',Score)
router.get('/localbody',Localbody)
router.get('/lsgi',lsgi)

module.exports=router

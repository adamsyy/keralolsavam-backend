const {Getnews} = require('../controller/News/Getnews');
const {Postnews} = require('../controller/News/Postnews');

const router = require("express").Router();

router.post("/postnews", Postnews);
router.get("/getnews", Getnews);

module.exports = router;
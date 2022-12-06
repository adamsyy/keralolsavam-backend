const {Getnews} = require('../controller/News/Getnews');
const {Postnews} = require('../controller/News/Postnews');

const router = require("express").Router();

router.post("/", Postnews);
router.get("/", Getnews);

module.exports = router;
const {Getnews} = require('../controller/News/Getnews');
const {Postnews} = require('../controller/News/Postnews');
const {Deletenews}=require('../controller/News/Deletenews');
const {Putnews}=require('../controller/News/Putnews');

const router = require("express").Router();

router.post("/", Postnews);
router.get("/", Getnews);
router.delete("/:id", Deletenews);
router.put("/:id", Putnews);

module.exports = router;
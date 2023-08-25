const express = require('express');
const { getSectorList, getTopicList } = require('../../controller');



const router = express.Router();

router.get("/sector", getSectorList)
router.get("/topic", getTopicList)

module.exports = router;
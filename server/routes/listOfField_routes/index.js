const express = require('express');
const {
    getList,
    getListTypes
} = require('../../controller');



const router = express.Router();

router.get("/getList/:type", getList);
router.get("/getListTypes", getListTypes);


module.exports = router;
const express = require('express');
const { getSingleData, getDataWithFilter, getDataFilterByYear } = require('../../controller');
const { checkDataFilterLength } = require('../../middleware');




const router = express.Router();

router.get('/singleData/:id', getSingleData)
router.post('/dataSingleFilter', checkDataFilterLength, getDataWithFilter)
router.post('/dataFilterByYear', getDataFilterByYear)

module.exports = router;
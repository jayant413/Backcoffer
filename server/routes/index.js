const express = require('express');
const listOfFieldRoutes = require('./listOfField_routes');
const getDetailsRoutes = require('./getDetails_routes');



const router = express.Router();

router.use("/listOfField", listOfFieldRoutes)
router.use("/getDetails", getDetailsRoutes)

module.exports = router;
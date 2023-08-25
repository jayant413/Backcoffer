const express = require('express');
const listOfFieldRoutes = require('./listOfField_routes');



const router = express.Router();

router.use("/listOfField", listOfFieldRoutes)

module.exports = router;
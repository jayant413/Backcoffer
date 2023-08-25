const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

const connectDB = require('./db/db.js');
const apiRoutes = require('./routes');

dotenv.config();
connectDB();

const app = express();

app.use("/api", apiRoutes)

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server running on port ${process.env.PORT}`.bgCyan.white);
});

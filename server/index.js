const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');

const connectDB = require('./db/db.js');
const apiRoutes = require('./routes');

const app = express();

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());


app.use("/api", apiRoutes)

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server running on port ${process.env.PORT}`.bgCyan.white);
});

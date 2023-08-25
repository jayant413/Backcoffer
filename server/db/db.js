const mongoose = require('mongoose');
const colors = require('colors');
const jsondata = require('../jsondata.json');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL_BACKCOFFER);
        console.log(`Connected to MongoDB database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in MongoDB Connection ${error}`.bgRed.white);
    }
}

module.exports = connectDB;

const mongoose = require('mongoose');

// Create a schema
const dataSchema = new mongoose.Schema({
    intensity: Number,  // var 
    likelihood: Number, // var 
    relevance: Number,  // var 
    topic: String,      // var , filter
    region: String,     // var , filter
    country: String,    // var , filter
    end_year: String,   // var , filter
    start_year: String, // var , filter
    source: String,     // filter
    sector: String,     // filter
    pestle: String,     // filter
    insight: String,
    url: String,
    impact: String,
    added: Date,
    published: Date,
    title: String,
});

// Create a model
const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;

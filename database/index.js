const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/FEC-listing-details';

const db = mongoose.connect(mongoUri);

module.exports = db;

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  home: { type: Number, unique: true },
  title: String,
  location: String,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;

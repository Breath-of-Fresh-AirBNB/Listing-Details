/* eslint-disable */
const Listing = require('../database/Listing');

const cb = (err, results) => {
  if (err) {
    cb(err, null);
  }
  cb(null, results);
};

const getAllListings = (cb) => {
  Listing.find(cb);
};

module.exports = {
  getAllListings,
};

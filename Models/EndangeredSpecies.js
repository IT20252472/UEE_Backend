const mongoose = require("mongoose");

const endangeredSpecies = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  addedBy: {
    type: String,
    required: true,
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
});

const EndangeredSpecies = mongoose.model(
  "EndangeredSpecies",
  endangeredSpecies
);
module.exports = EndangeredSpecies;

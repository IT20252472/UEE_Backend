const mongoose = require("mongoose");

const resources = new mongoose.Schema({
  authorName: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  addedBy: {
    type: String,
    required: true
  }
});

const Resources = mongoose.model("Resources", resources);
module.exports = Resources;

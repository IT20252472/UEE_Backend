const mongoose = require("mongoose");

const resources = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  img: {
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
  },
  date:{
    type:Date,
    default: Date.now
  }
});

const Resources = mongoose.model("Resources", resources);
module.exports = Resources;

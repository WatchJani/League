const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({
  number: {
    type: Number,
  },
  actual: {
    type: Number,
  },
  locked: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Please enter your season's name"],
    minlength: [2, "Minimum season's name length is 2 characters"],
  },
});

const Season = mongoose.model('season', seasonSchema);
module.exports = Season;

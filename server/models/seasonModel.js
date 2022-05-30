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
    required: [true, 'Please enter your season name'],
    minlength: [2, 'Minimum season name length is 2 characters'],
  },
});

const Season = mongoose.model('season', seasonSchema);
module.exports = Season;

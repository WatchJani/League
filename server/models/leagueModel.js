const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your first name'],
    minlength: [2, 'Minimum first name length is 2 characters'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Please enter your first name'],
    minlength: [2, 'Minimum first name length is 2 characters'],
  },
  image: {
    type: String,
    default: 'avatar.svg',
  },
});

const League = mongoose.model('league', leagueSchema);
module.exports = League;

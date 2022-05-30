const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter league's name"],
    minlength: [2, 'Minimum name length is 2 characters'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Please enter league's address"],
    minlength: [2, 'Minimum address length is 2 characters'],
  },
  image: {
    type: String,
    default: 'avatar.svg',
  },
});

const League = mongoose.model('league', leagueSchema);
module.exports = League;

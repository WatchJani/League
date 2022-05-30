const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter player first name'],
    minlength: [2, 'Minimum first name length is 2 characters'],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, 'Please enter player last name'],
    minlength: [2, 'Minimum last name length is 2 characters'],
    trim: true,
  },
  height: {
    type: Number,
    required: [true, 'Please enter player height'],
    min: [50, 'The minimum height you can enter is 50'],
  },
  weight: {
    type: Number,
    required: [true, 'Please enter player weight'],
    min: [30, 'The minimum weight you can enter is 30'],
  },
  image: {
    type: String,
    default: 'avatar.svg',
  },
});

const Player = mongoose.model('player', playerSchema);
module.exports = Player;

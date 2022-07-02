const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter player's first name"],
    minlength: [2, 'Minimum first name length is 2 characters'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please enter player's last name"],
    minlength: [2, 'Minimum last name length is 2 characters'],
    trim: true,
  },
  height: {
    type: Number,
    required: [true, "Please enter player's height (cm)"],
    min: [50, 'The minimum height you can enter is 50'],
  },
  weight: {
    type: Number,
    required: [true, "Please enter player's weight (kg)"],
    min: [30, 'The minimum weight you can enter is 30'],
  },
  image: {
    type: String,
    default:
      'https://res.cloudinary.com/leagues/image/upload/v1655734401/Leagues/avatar_bo7zjb.png',
  },
});

const Player = mongoose.model('player', playerSchema);
module.exports = Player;

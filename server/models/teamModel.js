const mongoose = require('mongoose');

const teamModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your team name'],
    minlength: [2, 'Minimum team name length is 2 characters'],
    unique: [true, 'Team with that name already exists!'],
  },
  address: String,
  image: {
    type: String,
    default:
      'https://res.cloudinary.com/leagues/image/upload/v1655734382/Leagues/teamDefault_jkzk6u.jpg',
  },
});

const Team = mongoose.model('team', teamModel);
module.exports = Team;

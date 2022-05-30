const mongoose = require('mongoose');

const teamModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your team name'],
    minlength: [2, 'Minimum team name length is 2 characters'],
    unique: [true, 'Team with that name already exists!'],
  },
  address: String,
  image: String,
});

const Team = mongoose.model('team', teamModel);
module.exports = Team;

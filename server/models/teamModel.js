const mongoose = require('mongoose');

const teamModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your season name'],
        minlength: [2, 'Minimum season name length is 2 characters'],
    },
    address: {
        type: String,
    },
    logo: {
        type: String,
        default: 'avatar.svg',
    },
});

const Team = mongoose.model('team', teamModel);
module.exports = Team;
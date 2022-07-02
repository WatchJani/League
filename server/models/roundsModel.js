const mongoose = require('mongoose');

const roundSchema = new mongoose.Schema({
    number: {
        type: Number
    }
});

const Round = mongoose.model('round', roundSchema);
module.exports = Round;

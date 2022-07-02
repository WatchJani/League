const mongoose = require('mongoose');

const roundSchema = new mongoose.Schema({
    number: {
        type: Number
    },



    fixture: {
        type: Array,
        default: []
    }
});

const Round = mongoose.model('round', roundSchema);
module.exports = Round;

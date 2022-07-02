const mongoose = require('mongoose');

const fixtureSchema = new mongoose.Schema({
    dataOfMatch: {
        type: String,
    },
    status: {
        type: Boolean,
    },
    homeGoals: {
        type: Number,
        default: 0,
    },
    awayGoals: {
        type: Number,
        default: 0,
    },
    homeFauls: {
        type: Number,
        default: 0,
    },
    awayFauls: {
        type: Number,
        default: 0,
    },
    homePenalties: {
        type: Number,
        default: 0,
    },
    awayPenalties: {
        type: Number,
        default: 0,
    },
    homeShots: {
        type: Number,
        default: 0,
    },
    awayShots: {
        type: Number,
        default: 0,
    },
    homeYelow: {
        type: Number,
        default: 0,
    },
    awayYellow: {
        type: Number,
        default: 0,
    },
    homeRed: {
        type: Number,
        default: 0,
    },
    awayRed: {
        type: Number,
        default: 0,
    },
    homeCorners: {
        type: Number,
        default: 0,
    },
    awayCorners: {
        type: Number,
        default: 0,
    },
    realStartTime: {
        type: Date,
    },
    realEndTime: {
        type: Date
    }
});

const Fixture = mongoose.model('ficture', fixtureSchema);
module.exports = Action;

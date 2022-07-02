const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
    minute: {
        type: Number
    },
    enum: ["START_GAME, HALF_TIME, END_GAME, PLAY, SHOT, GOAL, ASSIST, AUTO_GOAL, FOUL, PENALTY, CORNER, YELLOW, RED, SUSPENSION_2_MIN"]
});

const Action = mongoose.model('action', actionSchema);
module.exports = Action;

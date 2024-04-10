const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    prizeMoney: { type: Number, required: true },
    winningNumberPattern: { type: Array, required: true }, // Define winning patterns
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
  });

const Game = mongoose.model('Game', gameSchema)

module.exports = Game
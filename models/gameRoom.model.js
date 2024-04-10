const mongoose = require('mongoose');

const gameRoomSchema = new mongoose.Schema({
    gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    started: { type: Boolean, default: false },
    calledNumbers: [{ type: Number }],
  });

  const GameRoom = mongoose.model('GameRoom', gameRoomSchema);

module.exports = { GameRoom };
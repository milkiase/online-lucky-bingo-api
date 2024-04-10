const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user.model')
const Game = require('./models/game.model')
const GameRoom = require('./models/gameRoom.model')

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

// Database connection (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/online-lucky-bingo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); // Parse JSON data from requests

// ... Your Express routes (e.g., authentication, game creation)

io.on('connection', (socket) => {
    console.log('socket connected')
    console.log(socket.handshake)
  // Handle socket events (game logic, communication, etc.)
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

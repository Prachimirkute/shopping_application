const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected.');

  socket.on('chat-message', (message) => {
    io.emit('chat-message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const socketio = require('socket.io');

module.exports = (server, availableCors) => {
  const io = socketio(server, { cors: { origin: availableCors } });

  io.on('connection', (socket) => {
    console.log('We have a new connection!');

    socket.on('disconnect', () => {
      console.log('User had left');
    });
  });
};

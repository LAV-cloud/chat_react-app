const socketio = require('socket.io');

const { updateSocket, getUser } = require('../controllers/users');

function getUsersInRoomNow(io, roomId) {
  let users = [];

  if (io.of('/').adapter.rooms.size) {
    for (let socketId of io.of('/').adapter.rooms.get(roomId)) {
      users.push(getUser(socketId));
    }
  }
}

module.exports = (server, availableCors) => {
  const io = socketio(server, { cors: { origin: availableCors } });
  io.on('connection', (socket) => {
    let socketUserId = '';
    console.log('We have a new connection!');

    socket.on('join', (userId) => {
      socketUserId = userId;
      updateSocket(userId, socket.id);
    });

    socket.on('joinRoom', (userId, roomId) => {
      console.log(`${userId} has joined to room "${roomId}"`);
      socket.join(roomId);
    });

    socket.on('leaveRoom', (userId, roomId) => {
      console.log(`${userId} had left room "${roomId}"`);
      socket.leave(roomId);
    });

    socket.on('sendMessage', async (userId, roomId, text, cb) => {
      const user = await getUser(null, null, userId);
      const message = {
        author: user,
        text,
        date: Date.now(),
      };

      io.to(roomId).emit('message', message);
      cb(message);
    });

    socket.on('disconnect', () => {
      updateSocket(socketUserId, '');
      console.log('User had left');
    });
  });
};

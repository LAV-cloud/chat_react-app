const mongoose = require('mongoose');
const Room = mongoose.model('Room');

function getRooms(req, res) {
  if (req.query.name) {
    Room.find(req.query.name)
      .exec()
      .then((rooms) => res.json(rooms))
      .catch((err) => res.status(500).json(err));
    return;
  }

  Room.find()
    .exec()
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(500).json(err));
}

function getRoom(req, res, id) {
  if (id) {
    return Room.findById(id).exec();
  }

  Room.findById(req.params.id)
    .exec()
    .then((room) => res.json(room))
    .catch((err) => res.status(500).json(err));
}

function createRoom(req, res) {
  Room.create(req.body)
    .then((createdRoom) => res.json(createdRoom))
    .catch((err) => res.status(500).json(err));
}

function updateRoom(req, res) {
  Room.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then((room) => res.json(room))
    .catch((err) => res.status(500).json(err));
}

async function sendMessage(roomId, message) {
  let room = await getRoom(null, null, roomId);
  room.messages.push(message);

  Room.findByIdAndUpdate(roomId, room).exec();
}

function deleteRoom(req, res) {
  Room.deleteById(req.params.id)
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
}

module.exports = {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
  sendMessage,
};

const mongoose = require('mongoose');
const User = mongoose.model('User');

function getUsers(req, res) {
  if (req.query.name) {
    User.find(req.query.name)
      .exec()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
    return;
  }

  User.find()
    .exec()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
}

function getUser(req, res, id) {
  if (id) {
    return User.findById(id).exec();
  }

  User.findById(req.params.id)
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
}

function createUser(req, res) {
  User.create(req.body)
    .then((createdUser) => res.json(createdUser))
    .catch((err) => res.status(500).json(err));
}

async function updateSocket(userId, socket) {
  let user = await getUser(null, null, userId);
  user.socket = socket;

  User.findByIdAndUpdate(userId, user).exec();
}

function updateUser(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
}

function deleteUser(req, res) {
  User.deleteById(req.params.id)
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  updateSocket,
  deleteUser,
};

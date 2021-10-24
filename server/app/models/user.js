const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  avatar: String,
  email: String,
  password: String,
  rooms: [Number],
});
mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const User = mongoose.model('User');

const MessageSchema = new mongoose.Schema({
  author: User,
  data: String,
  date: Date,
});
mongoose.model('Message', MessageSchema);

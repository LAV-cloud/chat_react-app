const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  name: String,
  description: String,
  users: [Number],
  messages: [
    {
      author: {
        id: Number,
        name: String,
        avatar: String,
      },
      text: String,
      date: Date,
    },
  ],
});
mongoose.model('Room', RoomSchema);

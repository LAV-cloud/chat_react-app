const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  email: String,
  password: String,
  socket: String,
  rooms: [
    {
      id: Number,
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
    },
  ],
});
mongoose.model('User', UserSchema);

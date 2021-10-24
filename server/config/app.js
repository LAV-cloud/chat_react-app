require('dotenv').config();

const db = {
  name: 'Chat',
  login: 'LAV',
  password: '5tK$Wg63MbXC8J$',
};

module.exports = {
  PORT: process.env.PORT || 5000,
  availableCors: ['http://localhost:3000'],
  mongoUri: `mongodb+srv://${db.login}:${db.password}@cluster.bzen4.mongodb.net/${db.name}?retryWrites=true&w=majority`,
  jwt: {
    secret: 'daleko ne vsem',
    tokens: {
      access: {
        type: 'access',
        expiresIn: '30m',
      },
      refresh: {
        type: 'refresh',
        expiresIn: '45m',
      },
    },
  },
};

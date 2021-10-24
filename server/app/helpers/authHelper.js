const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const { secret, tokens } = require('../../config/app').jwt;

const Token = mongoose.model('Token');

function generateAccessToken(userId) {
  const payload = {
      userId,
      type: tokens.access.type,
    },
    options = { expiresIn: tokens.access.expiresIn };

  return jwt.sign(payload, secret, options);
}

function generateRefreshToken() {
  const payload = {
      id: uuid.v4(),
      type: tokens.refresh.type,
    },
    options = { expiresIn: tokens.refresh.expiresIn };
  return { id: payload.id, token: jwt.sign(payload, secret, options) };
}

function replaceDbRefreshToken(tokenId, userId) {
  return Token.findOneAndRemove({ userId })
    .exec()
    .then(() => Token.create({ tokenId, userId }));
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  replaceDbRefreshToken,
};

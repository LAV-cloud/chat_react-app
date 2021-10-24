const jwt = require('jsonwebtoken');
const { secret } = require('../../config/app').jwt;

module.exports = (req, res, next) => {
  const authHelper = req.get('Authorization');

  if (!authHelper) {
    res.status(401).json({ message: 'Token not provided' });
    return;
  }

  const token = authHelper.replace('Bearer ', '');
  try {
    const payload = jwt.verify(token, secret);

    if (payload.type !== 'access') {
      res.status(401).json({ message: 'Invalid token!' });
      return;
    }
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      res.status(401).json({ message: 'Token expired!' });
      return;
    }

    if (err instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: 'Invalid token!' });
      return;
    }
  }

  next();
};

const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    const date = moment().format('DDMMYYYY-HHmmss_SSS');
    cb(null, `${date}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.replace(/\/.+/, '') === 'image') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limits = {
  fileSize: Math.pow(1024, 2) * 10,
};

module.exports = multer({
  storage,
  fileFilter,
  limits,
});

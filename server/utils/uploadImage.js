const multer = require('multer');

const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + file?.originalname);
  },
});

module.exports.upload = multer({
  storage: Storage,
});

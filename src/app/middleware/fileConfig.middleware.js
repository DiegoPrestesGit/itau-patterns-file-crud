const multer = require('multer');

const upload = multer({
  fileFilter: (_, file, cb) => {
    if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|pdf)$/)) {
      return cb(null, false);
    }
    cb(null, true);
  }
});

function afterUpload(req, res, next) {
  if (req.file === undefined)
    return res.status(400).send({ message: 'Esse mime type não é suportado!' });

  next();
}

module.exports = { upload, afterUpload }

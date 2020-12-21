const multer = require('multer')

const upload = multer({
  fileFilter: (_, file, callback) => {
    if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|pdf)$/)) {
      return callback(null, false)
    }
    callback(null, true)
  }
})

function afterUpload(request, response, next) {
  if (request.file === undefined)
    return response.status(400).send({ message: 'Esse mime type não é suportado!' })

  next()
}

module.exports = { upload, afterUpload }

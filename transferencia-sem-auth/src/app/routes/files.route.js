const express = require('express')
const router = express.Router()
const { upload, afterUpload } = require('../middleware/multerConfig.middleware')
const { uploadFile, findFileByName } = require('../controller/Files.controller')

router.post('/atendimentos/v1/cliente/:id_cliente/upload-arquivo', [upload.single('file'), afterUpload], uploadFile)
router.get('/atendimentos/v1/cliente/find-arquivo', findFileByName)

module.exports = router

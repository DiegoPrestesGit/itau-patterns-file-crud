const express = require('express')

const { getFile, uploadFile } = require('../controller/File.controller')
const { tokenVerify } = require('../middleware/tokenVerify.middleware')
const { upload, afterUpload } = require('../middleware/fileConfig.middleware')

const router = express.Router()

router.post('/atendimentos/v1/cliente/:id_cliente/arquivos', [
  tokenVerify,
  upload.single('file'),
  afterUpload],
  uploadFile)

router.get('/atendimentos/v1/cliente/:id_cliente/conteudo/:id_conteudo', tokenVerify, getFile)

module.exports = router

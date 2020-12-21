const express = require('express')

const { getFile, uploadFile } = require('../controller/File.controller')
const { ensureAuthenticated } = require('../middleware/ensureAuth')
const { upload, afterUpload } = require('../middleware/fileConfig.middleware')

const router = express.Router()

router.post('/atendimentos/v1/cliente/:id_cliente/arquivos', [
  ensureAuthenticated,
  upload.single('file'),
  afterUpload],
  uploadFile)

router.get('/atendimentos/v1/cliente/:id_cliente/conteudo/:id_conteudo', ensureAuthenticated, getFile)

module.exports = router

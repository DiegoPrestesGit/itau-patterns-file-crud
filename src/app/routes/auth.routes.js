const express = require('express')
const router = express.Router()

const { generateToken } = require('../controller/Auth.controller')
router.get('/obter/token/v1/cliente/:id_cliente', generateToken)

module.exports = router

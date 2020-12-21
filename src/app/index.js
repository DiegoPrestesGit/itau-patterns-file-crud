const express = require('express')

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    require("dotenv").config()
  }

  routes() {
    this.app.use(require('./routes/file.routes'))
    this.app.use(require('./routes/auth.routes'))
  }
}

module.exports = () => new App().app

const express = require('express')

class App{
  constructor(){
    this.app = express()
  }

  middleware(){

  }

  routes(){

  }
}

module.exports = () => new App().app

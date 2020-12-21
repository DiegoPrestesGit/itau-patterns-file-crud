const fs = require('fs')
const path = require('path')
const x = require
class FindFileByName {

  async findFileByName(filename) {
    const uploadDir = '../../../upload'
    const files = await fs.promises.readdir(uploadDir)
    console.log(files)
    console.log('CANSADO')
  }
}

module.exports = new FindFileByName()

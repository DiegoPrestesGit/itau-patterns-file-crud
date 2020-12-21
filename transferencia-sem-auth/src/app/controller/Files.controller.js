const { uploadFile } = require('../../core/services/Files.service')
const { findFileByName } = require('../../core/services/FindFileByName.service')

class FilesController {

  async uploadFile(req, res) {
    try {

      const { params, file } = req


      const result = await uploadFile(params.id_cliente, file)

      console.log(result)

      res.status(201).send({ message: 'Seu arquivo foi salvo com sucesso!' })

    } catch (error) {

      const { message, stack } = error
      res.status(500).send({ message, stack })
    }
  }

  async findFileByName(request, response) {
    try{
      const { filename } = request.body
      const foundIt = findFileByName(filename)
    } catch (error) {
      const { message, stack } = error
      response.status(500).send({ message, stack })
    }
  }
}

module.exports = new FilesController()

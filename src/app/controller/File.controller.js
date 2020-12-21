const FileService = require('../../core/services/File.service');

class FileController {
  async uploadFile(request, response) {
    try {
      const { file } = request;

      await FileService.uploadFile(file);

      response.status(201).send({ message: 'O seu arquivo foi salvo com sucesso!' })

    } catch (error) {

      const { message, stack } = error;
      response.status(500).send({ message, stack });
    }
  }

  async getFile(request, response) {
    try {

      const { id_cliente, id_conteudo } = request.params;
      const myB64 = await FileService.readFile(id_conteudo);

      return response.status(200).send(myB64);

    } catch (error) {

      const { message, stack } = error;
      response.status(500).send({ message, stack });
    }
  }
}

module.exports = new FileController();

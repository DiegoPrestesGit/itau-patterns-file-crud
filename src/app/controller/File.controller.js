const FileService = require('../../core/services/File.service');

class FileController {
  async uploadFile(req, res) {
    try {
      const { file } = req;

      await FileService.uploadFile(file);

      res.status(201).send({ message: 'O seu arquivo foi salvo com sucesso!' })

    } catch (error) {

      const { message, stack } = error;
      res.status(500).send({ message, stack });
    }
  }

  async getFile(req, res) {
    try {

      const { id_cliente, id_conteudo } = req.params;
      const myB64 = await FileService.readFile(id_conteudo);

      return res.status(200).send(myB64);

    } catch (error) {

      const { message, stack } = error;
      res.status(500).send({ message, stack });
    }
  }
}

module.exports = new FileController();

const fs = require('fs');

class FileService {
  async uploadFile(file) {
    try {
      console.log(file);
      const { originalname, buffer } = file;
      const byteArray = new Uint8Array(buffer);

      return await fs.writeFileSync(`assets/${originalname}`, byteArray);

    } catch (error) {

      throw err;
    }
  }

  async readFile(fileName) {
    try {

      const file = await fs.readFileSync(`assets/${fileName}`);
      console.log(file);
      const myB64 = Buffer.from(file.buffer, 'binary').toString('base64');

      return myB64;
    } catch (error) {
      throw err;
    }
  }
}

module.exports = new FileService();

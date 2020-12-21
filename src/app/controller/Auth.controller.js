const AuthService = require('../../core/services/Auth.service');

class AuthController {
  generateToken(req, res) {
    try {

      const token = AuthService.generateToken(req.params);
      res.status(201).send({ token });

    } catch (err) {

      const { message, stack } = err;
      res.status(400).send({ message, stack });
    }
  }
}

module.exports = new AuthController();

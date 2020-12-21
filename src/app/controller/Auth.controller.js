const AuthService = require('../../core/services/Auth.service');

class AuthController {
  generateToken(request, response) {
    try {

      const token = AuthService.generateToken(request.params);
      response.status(201).send({ token });

    } catch (err) {

      const { message, stack } = err;
      response.status(400).send({ message, stack });
    }
  }
}

module.exports = new AuthController();

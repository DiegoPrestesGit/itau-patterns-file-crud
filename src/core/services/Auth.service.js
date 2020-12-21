const jwt = require('jsonwebtoken')

class AuthService {
  generateToken({ id_cliente }) {
    const token = jwt.sign({ id_cliente }, process.env.SECRET, { expiresIn: '60h' })
    return token
  }
}

module.exports = new AuthService()

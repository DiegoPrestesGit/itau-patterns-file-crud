const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')


function ensureAuthenticated (request, response, next) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new Error('JWT token missing', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    let verified
    jwt.verify(token, 'shhhhh', function(decoded) {
      verified = decoded
      console.log(decoded)
    })
    console.log('XESQUE')
    console.log(verified)

    return next()
  } catch {
    throw new Error('Invalid JWT token', 401)
  }
}

module.exports = { ensureAuthenticated }

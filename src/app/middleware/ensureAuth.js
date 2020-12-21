const jwt = require('jsonwebtoken')

function ensureAuthenticated (request, response, next) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT token missing', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.jwt.secret)
    console.log(decoded)

    return next()
  } catch {
    throw new AppError('Invalid JWT token', 401)
  }
}

module.exports = {
  tokenVerify
}

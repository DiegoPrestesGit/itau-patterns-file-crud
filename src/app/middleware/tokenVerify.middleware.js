const jwt = require('jsonwebtoken');

function tokenVerify(request, response, next) {
  const { authorization } = request.headers;
  if (authorization) {
    try {
      const token = authorization.replace('Bearer ', '');
      const result = jwt.verify(token, process.env.SECRET);
      console.log(result);
      return next();

    } catch (err) {
      const { message } = err;
      return response.status(401).send({ message });
    }
  }

  response.status(401).send({ message: 'invalid token!' });
}

module.exports = {
  tokenVerify
}

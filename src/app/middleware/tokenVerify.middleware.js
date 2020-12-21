const jwt = require('jsonwebtoken');

function tokenVerify(req, res, next) {
  const { authorization } = req.headers;
  if (authorization) {
    try {
      const token = authorization.replace('Bearer ', '');
      const result = jwt.verify(token, process.env.SECRET);
      console.log(result);
      return next();

    } catch (err) {
      const { message } = err;
      return res.status(401).send({ message });
    }
  }

  res.status(401).send({ message: 'invalid token!' });
}

module.exports = {
  tokenVerify
}

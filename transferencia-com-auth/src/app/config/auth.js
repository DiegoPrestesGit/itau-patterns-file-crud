const jwtoken = {
  secret: process.env.APP_SECRET || 'default',
  expiresIn: '60d'
}

module.exports = { jwtoken }

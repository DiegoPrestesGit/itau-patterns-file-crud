const appFile = `${__dirname}/server.js`

if (process.env.ENV === 'dev' || process.env.ENV === undefined) {
  const app = require(appFile)
  app.init()
}

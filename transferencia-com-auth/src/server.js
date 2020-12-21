module.exports.init = () => {
  const port = 3333
  const app = require('./app')()

  app.listen(port, () =>
    console.log(`The server is running on http://localhost:${port}`)
  )
}

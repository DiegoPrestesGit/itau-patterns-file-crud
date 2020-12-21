module.exports.init = () => {
  const port = process.env.PORT || 3000
  const app = require('./app')()

  app.listen(port, () => {
    console.log(`Up n Runnin: http://localhost:${port}`)
  })
}

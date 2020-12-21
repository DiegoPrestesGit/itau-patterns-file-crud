if(process.env.NODE_ENV === 'dev'){
  const app = require('./server')
  app.init()
}

if(process.env.NODE_ENV === 'homolog'){
  const app = require('./server')
  app.init()
}

if(process.env.NODE_ENV === 'prod'){
  const app = require('./server')
  app.init()
}

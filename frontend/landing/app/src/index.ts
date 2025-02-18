import express from 'express'
import next    from 'next'
import path    from 'path'

const bootstrap = async () => {
  const app = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: process.env.NODE_ENV !== 'production' ? path.join(__dirname, '../ src') : __dirname,
  })

  const PORT = process.env.PORT || 3000;

  const handle = app.getRequestHandler()

  await app.prepare()

  const server = express()

  server.get('*', (req, res) => handle(req, res))

  server.listen(PORT)
}

bootstrap()

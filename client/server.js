const dotEnv = require('dotenv')
dotEnv.config({
  path: './.env',
})
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const expressServer = require('../dist/app')
app.prepare().then(() => {
  expressServer.all('*', (req, res) => {
    return handle(req, res)
  })

  expressServer.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

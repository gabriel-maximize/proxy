import express from "express"
import https from "https"
import fs from "fs"

import "dotenv/config"

const app = express()

const options = {
  key: fs.readFileSync(String(process.env.PATH_SSL_KEY)),
  cert: fs.readFileSync(String(process.env.PATH_SSL_CERT))
}

https
  .createServer(options, app)
  .listen(443, () => console.log('Server is running'))

app.use(express.json())

app.get('/', (req, res) => {
  console.log(req)
  return res.send('ok')
})

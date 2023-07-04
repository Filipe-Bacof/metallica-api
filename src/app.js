require('dotenv').config()

const express = require('express')
const cors = require('cors')

const port = process.env.PORT

const app = express()

app.use(cors())

app.use(express.json())

app.listen(port, () => {
  console.log(`🔥 App rodando na porta ${port}`)
})

const router = require('./Router.js')
app.use(router)

require('./config/db.js')

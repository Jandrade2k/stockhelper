const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./config/database')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('API está rodando!')
})

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
})
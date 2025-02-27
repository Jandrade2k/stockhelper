const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./config/database')
const produtoRoutes = require('./routes/produtoRoutes')
const empresaRoutes = require('./routes/empresaRoutes')
const clienteRoutes = require('./routes/clienteRoutes')
const pedidoRoutes = require('./routes/pedidoRoutes')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use(bodyParser.json())

app.use('/produtos', produtoRoutes)
app.use('/empresas', empresaRoutes)
app.use('/clientes', clienteRoutes)
app.use('/pedidos', pedidoRoutes)

app.get('/', (req, res) => {
    res.send('API está rodando!')
})

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
})
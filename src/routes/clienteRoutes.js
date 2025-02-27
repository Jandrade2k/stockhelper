const express = require('express')
const clienteController = require('../controllers/clienteController')

const router = express.Router()

router.post('/', clienteController.criarCliente)

router.get('/:id', clienteController.buscarClientePorId)

router.put('/:id', clienteController.atualizarCliente)

router.delete('/:id', clienteController.deletarCliente)

module.exports = router
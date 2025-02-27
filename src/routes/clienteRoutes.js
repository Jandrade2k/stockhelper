const express = require('express')
const clienteController = require('../controllers/clienteController')

const router = express.Router()

router.get('/', clienteController.testCliente)

router.post('/', clienteController.criarCliente)

router.get('list', clienteController.listarClientes)

router.get('/:id', clienteController.buscarClientePorId)

router.put('/:id', clienteController.atualizarCliente)

router.delete('/:id', clienteController.deletarCliente)

module.exports = router
const express = require('express')
const pedidoController = require('../controllers/pedidoController')

const router = express.Router()

router.post('/', pedidoController.criarPedido)

router.get('/:id', pedidoController.buscarPedidoPorId)

router.put('/:id', pedidoController.atualizarPedido)

router.delete('/:id', pedidoController.deletarPedido)

router.get('/cliente/:clienteId', pedidoController.listarPedidosPorCliente)

module.exports = router

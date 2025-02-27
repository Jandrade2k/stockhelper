const express = require('express')
const produtoController = require('../controllers/produtoController')

const router = express.Router()

router.post('/', produtoController.criarProduto)

router.get('/:id', produtoController.buscarProdutoPorId)

router.put('/:id', produtoController.atualizarProduto)

router.delete('/:id', produtoController.deletarProduto)

router.get('/', produtoController.listarProdutosPorEmpresa)

module.exports = router
const express = require('express')
const empresaController = require('../controllers/empresaController')

const router = express.Router()

router.post('/', empresaController.criarEmpresa)

router.get('/:id', empresaController.buscarEmpresaPorId)

router.put('/:id', empresaController.atualizarEmpresa)

router.delete('/:id', empresaController.deletarEmpresa)

module.exports = router
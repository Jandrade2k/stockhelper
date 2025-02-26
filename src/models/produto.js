const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
    empresa: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa', required: true },
    nome: { type: String, required: true },
    descricao: String,
    preco: { type: Number, required: true },
    quantidade: { type: Number, required: true },
  })

module.exports = mongoose.model('Produto', produtoSchema)
const mongoose = require('mongoose')

const pedidoSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    produtos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Produto' }],
    enderecoEntrega: {
      cep: { type: String, required: true },
      rua: { type: String, required: true },
      numero: { type: String, required: true },
      complemento: String,
      cidade: { type: String, required: true },
      estado: { type: String, required: true },
      pais: { type: String, required: true },
      bairro: { type: String, required: true },
    },
    status: { type: String, enum: ['pendente', 'em_preparo', 'enviado', 'entregue'], default: 'pendente' },
    valor: { type: Number, required: true },
  })

module.exports = mongoose.model('Pedido', pedidoSchema)
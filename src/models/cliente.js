const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    nome: { type: String, required: true },
    cpfCnpj: { type: String, required: true, unique: true },
    cep: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: String,
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    pais: { type: String, required: true },
    bairro: { type: String, required: true },
    telefone: { type: String, required: true },
  })

  module.exports = mongoose.model('Cliente', clienteSchema)
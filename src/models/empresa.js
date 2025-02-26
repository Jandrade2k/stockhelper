const mongoose = require('mongoose')

const empresaSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  razaoSocial: { type: String, required: true },
  cnpj: { type: String, required: true, unique: true },
  nomeFantasia: { type: String, required: true },
  cep: { type: String, required: true },
  rua: { type: String, required: true },
  numero: { type: String, required: true },
  complemento: String,
  bairro: { type: String, required: true },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  pais: { type: String, required: true },
  telefone: { type: String, required: true },
});

module.exports = mongoose.model('Empresa', empresaSchema)
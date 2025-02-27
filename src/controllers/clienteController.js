const { json } = require('body-parser');
const Cliente = require('../models/cliente')
const bcrypt = require('bcrypt')

const clienteService = {

  testCliente: async () => {
    return 'Teste de Cliente OK!'
  },

  criarCliente: async (clienteData) => {
    try {
      const senhaCriptografada = await bcrypt.hash(clienteData.senha, 10)
      const novoCliente = new Cliente({
        ...clienteData,
        senha: senhaCriptografada,
      });
      return await novoCliente.save()
    } catch (error) {
      throw error
    }
  },

  listarClientes: async () => {
    try {
      return await Cliente.find()
    } catch (error) {
      throw error
    }
  },

  buscarClientePorEmail: async (email) => {
    try {
      return await Cliente.findOne({ email })
    } catch (error) {
      throw error
    }
  },

  buscarClientePorId: async (id) => {
    try {
      return await Cliente.findById(id)
    } catch (error) {
      throw error
    }
  },

  atualizarCliente: async (id, clienteData) => {
    try {
      if (clienteData.senha) {
        clienteData.senha = await bcrypt.hash(clienteData.senha, 10)
      }
      return await Cliente.findByIdAndUpdate(id, clienteData, { new: true })
    } catch (error) {
      throw error
    }
  },

  deletarCliente: async (id) => {
    try {
      return await Cliente.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  },
};

module.exports = clienteService

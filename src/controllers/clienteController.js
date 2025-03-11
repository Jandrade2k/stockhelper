const { json } = require('body-parser')
const Cliente = require('../models/cliente')
const bcrypt = require('bcrypt')

const clienteService = {

  testCliente: async () => {
    return 'Teste de Cliente OK!'
  },

  criarCliente: async (req, res) => {
    const clienteData = req.body

    if (!clienteData || !clienteData.senha) {
      return res.status(400).json({ message: 'Dados inválidos ou senha ausente' })
    }

    try {
      const senhaCriptografada = await bcrypt.hash(clienteData.senha, 10)
      const novoCliente = new Cliente({
        ...clienteData,
        senha: senhaCriptografada,
      });
      await novoCliente.save()
      
      return res.status(200).json({ message: `Cliente ${novoCliente.nome} criado com sucesso! no ID ${novoCliente._id}` })
    } catch (error) {
      throw res.status(500).json({ message: 'Erro ao criar cliente', error: error.message })
    }
  },

  listarClientes: async (req, res) => {
    try {
      return await Cliente.find()
    } catch (error) {
      throw res.status(500).json({ message: 'Erro ao listar clientes', error: error.message })
    }
  },

  buscarClientePorEmail: async (req, res) => {
    const emailData = req.body
    try {
      return await Cliente.findOne({ emailData})
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

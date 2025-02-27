const Empresa = require('../models/empresa')
const bcrypt = require('bcrypt')

const empresaService = {
  criarEmpresa: async (empresaData) => {
    try {
      const senhaCriptografada = await bcrypt.hash(empresaData.senha, 10)
      const novaEmpresa = new Empresa({
        ...empresaData,
        senha: senhaCriptografada,
      });
      return await novaEmpresa.save()
    } catch (error) {
      throw error
    }
  },

  buscarEmpresaPorEmail: async (email) => {
    try {
      return await Empresa.findOne({ email })
    } catch (error) {
      throw error
    }
  },

  buscarEmpresaPorId: async (id) => {
    try {
      return await Empresa.findById(id)
    } catch (error) {
      throw error
    }
  },

  atualizarEmpresa: async (id, empresaData) => {
    try {
      if (empresaData.senha) {
        empresaData.senha = await bcrypt.hash(empresaData.senha, 10)
      }
      return await Empresa.findByIdAndUpdate(id, empresaData, { new: true })
    } catch (error) {
      throw error
    }
  },

  deletarEmpresa: async (id) => {
    try {
      return await Empresa.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  },
};

module.exports = empresaService
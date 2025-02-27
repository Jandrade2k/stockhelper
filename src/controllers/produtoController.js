const Produto = require('../models/produto')

const produtoService = {
  criarProduto: async (produtoData) => {
    try {
      const novoProduto = new Produto(produtoData)
      return await novoProduto.save()
    } catch (error) {
      throw error
    }
  },

  buscarProdutoPorId: async (id) => {
    try {
      return await Produto.findById(id)
    } catch (error) {
      throw error
    }
  },

  atualizarProduto: async (id, produtoData) => {
    try {
      return await Produto.findByIdAndUpdate(id, produtoData, { new: true })
    } catch (error) {
      throw error
    }
  },

  deletarProduto: async (id) => {
    try {
      return await Produto.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  },

  listarProdutosPorEmpresa: async (empresaId) => {
    try {
      return await Produto.find({ empresa: empresaId })
    } catch (error) {
      throw error
    }
  },
};

module.exports = produtoService
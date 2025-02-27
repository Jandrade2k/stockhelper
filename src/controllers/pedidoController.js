const Pedido = require('../models/pedido')

const pedidoService = {
  criarPedido: async (pedidoData) => {
    try {
      const novoPedido = new Pedido(pedidoData)
      return await novoPedido.save()
    } catch (error) {
      throw error
    }
  },

  buscarPedidoPorId: async (id) => {
    try {
      return await Pedido.findById(id).populate('cliente').populate('produtos')
    } catch (error) {
      throw error
    }
  },

  atualizarPedido: async (id, pedidoData) => {
    try {
      return await Pedido.findByIdAndUpdate(id, pedidoData, { new: true })
    } catch (error) {
      throw error
    }
  },

  deletarPedido: async (id) => {
    try {
      return await Pedido.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  },

  listarPedidosPorCliente: async (clienteId) => {
    try {
      return await Pedido.find({ cliente: clienteId }).populate('cliente').populate('produtos')
    } catch (error) {
      throw error
    }
  },
};

module.exports = pedidoService
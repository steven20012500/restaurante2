const Order = require('../models/order');
const Dish = require('../models/platos');
const User = require('../models/user')
const orderController = {};  

orderController.getPedido = async (req, res) => {
  try{
    const order = await Order.find();
    res.json(order);
  }catch (error){
    console.error('Error al obtener los pedidos:', error);
    res.status(500).json({ message: 'Error interno al obtener los pedidos' });
  }
}

orderController.createOrder = async (req, res) => {
  try {
    const { dishes,total } = req.body;

    const newOrder = new Order({
      user: req.userId,
      dishes,
      total,
      createdAt: new Date()
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({ message: "Orden creada exitosamente", order: savedOrder });
  } catch (error) {
    console.error("Error al crear la orden:", error);
    res.status(500).json({ message: "Error al crear la orden", error });
  }
  };
  orderController.deletePedido = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.json({ message: 'Pedido eliminado' });
    } catch (error) {
        console.error('Error al eliminar pedido:', error);
        res.status(500).json({ message: 'Error interno al eliminar pedido' });
    }
}
  
  module.exports = orderController;


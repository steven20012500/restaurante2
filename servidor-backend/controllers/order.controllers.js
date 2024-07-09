const Order = require('../models/order');
const Dish = require('../models/platos');
const orderController = {};  

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
  
  module.exports = orderController;


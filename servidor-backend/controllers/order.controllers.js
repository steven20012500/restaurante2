const Order = require('../models/order');
const Dish = require('../models/platos');
const orderController = {};  

orderController.createOrder = async (req, res) => {
    
    try {
      const { dishId, quantity } = req.body;

      // Verify the dish exists
      const dish = await Dish.findById(dishId);
      if (!dish) {
        return res.status(404).json({ message: 'Plato no encontrado' });
      }
  
      const newOrder = new Order({ user: req.userId, dish: dishId, quantity, createdAt: new Date() });
      const savedOrder = await newOrder.save();
  
      res.status(201).json({ message: "Orden creada exitosamente", order: savedOrder });
    } catch (error) {
        console.error("Error al crear la orden:", error);
        res.status(500).json({ message: "Error al crear la orden", error });
    }
  };
  
  module.exports = orderController;
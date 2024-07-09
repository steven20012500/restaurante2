const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Referencia al usuario que realiza la orden
  dishes: [{
    dishId: { type: Schema.Types.ObjectId, ref: 'Dish', required: true }, // Referencia al plato
    quantity: { type: Number, required: true }
  }],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
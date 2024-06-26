const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  dish: { type: Schema.Types.ObjectId, ref: 'platos', required: true },
  quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
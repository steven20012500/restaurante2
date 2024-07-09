const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meseroSchema = new Schema({
    nombre: {type: String, required: true},
    imagen: {type: String, required: true},
    calificaciones: [{ type: Number }], // Añadir un array de calificaciones
    promedio: { type: Number } // Añadir un campo para el promedio de calificaciones
});

module.exports = mongoose.model('Mesero', meseroSchema);
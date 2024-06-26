const {Schema, model}= require('mongoose');

const PlatoSchema = new Schema({
    _id: {type: String, required: true},
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true},
    categoria: {type: String, required: true},
    imagen: {type: String, required: true}
});

module.exports = model('Plato', PlatoSchema);
const platos = require('../models/platos');
const platosController= {};

platosController.getPlatos = async (req, res) => {
    res.send('Bienvenido al backend de Menu');
}

platosController.addPlato = async (req, res) => {   
    try {
        const { nombre, precio, descripcion, categoria, imagen } = req.body;
        const newPlato = new platos({ nombre, precio, descripcion, categoria, imagen });
        
        await newPlato.save();
        
        res.status(201).json({ message: 'Plato guardado', plato: newPlato });
        console.log('Plato guardado:', newPlato);
      } catch (error) {
         console.error('Error al guardar el plato:', error);
        res.status(500).send('Error al guardar el plato');
      }
}

module.exports = platosController;
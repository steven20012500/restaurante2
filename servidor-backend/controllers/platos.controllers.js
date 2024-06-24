const platos = require('../models/platos');
const platosController= {};

platosController.getPlatos = async (req, res) => {
  try{
    const Platos = await platos.find();
    res.json(Platos);
  }catch (error){
    console.error('Error al obtener los platos:', error);
    res.status(500).json({ message: 'Error interno al obtener los platos' });
  }
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
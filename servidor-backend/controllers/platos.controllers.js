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

platosController.updateMenu = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, imagen, categoria } = req.body;

  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      id,
      { nombre, descripcion, precio, imagen, categoria },
      { new: true }  // Devolver el documento actualizado
    );

    if (!updatedMenu) {
      return res.status(404).json({ message: 'Plato no encontrado' });
    }

    res.json({ message: 'Plato actualizado', updatedMenu });
  } catch (error) {
    console.error('Error al actualizar el plato:', error);
    res.status(500).json({ message: 'Error interno al actualizar el plato' });
  }
};


module.exports = platosController;
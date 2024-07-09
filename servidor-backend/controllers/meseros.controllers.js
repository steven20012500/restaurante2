const meseros = require('../models/meseros');

const meserosController= {};

meserosController.getMeseros = async (req, res) => {
    try{
      const Mesero = await meseros.find();
      res.json(Mesero);
    }catch (error){
      console.error('Error al obtener los meseros:', error);
      res.status(500).json({ message: 'Error interno al obtener los meseros' });
    }
  }
  



meserosController.addMesero = async (req, res) => {   
    try {
        const { nombre, imagen } = req.body;
        const newMesero = new meseros({ nombre, imagen });
        
        await newMesero.save();
        
        res.status(201).json({ message: 'Mesero guardado', mesero: newMesero });
        console.log('Mesero ingresado :', newMesero);
      } catch (error) {
         console.error('Error al guardar el plato:', error);
        res.status(500).send('Error al ingresar el mesero');
      }
}


meserosController.calificarMesero = async (req, res) => {
    const { meseroId, calificacion } = req.body;
    try {
        
      const Mesero = await meseros.findById(meseroId);
      if (!Mesero) {
       return res.status(404).json({ message: 'Mesero no encontrado' });
      }
      Mesero.calificaciones.push(calificacion);
      Mesero.promedio = Mesero.calificaciones.reduce((a, b) => a + b, 0) / Mesero.calificaciones.length;
      await Mesero.save();
      res.status(200).json({ message: 'Calificación añadida', Mesero });
    } catch (error) {
     res.status(500).json({ message: 'Error al calificar mesero', error });
    }
  };


module.exports = meserosController;
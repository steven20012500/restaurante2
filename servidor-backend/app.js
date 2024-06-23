const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const platos = require('./models/platos');
const app = express();
const PORT = process.env.PORT || 3000;
require('./database');
app.use(express.json());
// app.use(morgan('dev'));

//cors para permitir la conexion con el front end
app.use(cors());
app.use('/api-menu/',require('./routes/server.routes'));
app.use(bodyParser.json());




app.post('/api/agregarFactura', async (req, res) => {
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
});


app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});





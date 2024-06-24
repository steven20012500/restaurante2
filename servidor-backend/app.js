const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const platos = require('./models/platos');
const app = express();
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3000;
require('./database');
app.use(express.json());
// app.use(morgan('dev'));
const User = require('./models/user');
//cors para permitir la conexion con el front end
app.use(cors());
app.use('/api-menu/',require('./routes/server.routes'));
app.use(bodyParser.json());


app.post('/api/registrar', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  try {
      if (!user) {
          return res.status(401).send("El correo no existe");
      }
      if (user.password !== password) {
          return res.status(401).send("Contraseña incorrecta");
      }
      const token = jwt.sign({ _id: user._id }, 'secretkey');
      return res.status(200).json({ token });
  } catch (error) {
      console.error('Error en el login:', error);
      return res.status(500).json({ message: 'Error interno en el servidor' });
  }
});


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





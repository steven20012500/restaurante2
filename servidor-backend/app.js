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


app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});





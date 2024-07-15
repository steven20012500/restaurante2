const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

//require('./database');
require('dotenv').config();

app.use(express.json());
// app.use(morgan('dev')); monitoreo de peticiones
//cors para permitir la conexion con el front end
app.use(cors());
app.use('/api-menu/',require('./routes/server.routes'));
app.use(bodyParser.json());

const dbURI = 'mongodb+srv://jsuntaxic:nyAxUz78d0sHNLAp@restaurante.kdgk98n.mongodb.net/?retryWrites=true&w=majority&appName=Restaurante';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error('MongoDB Atlas connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




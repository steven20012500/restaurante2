const mongoose = require('mongoose');
const URI = 'mongodb+srv://jsuntaxic:nyAxUz78d0sHNLAp@restaurante.kdgk98n.mongodb.net/?retryWrites=true&w=majority&appName=Restaurante'
mongoose.connect(URI)
.then (db => console.log('DB conectada'))
.catch(err => console.error(err));
module.exports = mongoose;
//mongoose.connect(''mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<base-de-datos>?retryWrites=true&w=majority'', {

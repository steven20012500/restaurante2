const jwt = require('jsonwebtoken');
const User = require('../models/user');
const usersController = {};

usersController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

usersController.addUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = new User({ email, password });
        await newUser.save();

        const token = jwt.sign({ _id: newUser._id }, 'secretkey'); // Aquí usas jwt.sign

        res.status(200).json({ message: 'Usuario guardado', token, user: newUser });
    } catch (error) {
        console.error('Error al guardar usuario:', error);
        res.status(500).json({ message: 'Error interno al guardar usuario' });
    }
}

usersController.loginUser = async (req, res) => {
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
}


usersController.getTasks = async (req, res) =>
    {
        res.json([
    {
        _id:1,
        name: 'Tarea1',
        descripcion: 'Descripcion de la tarea 1',
    },
    { 
        _id:2, 
        name:'Tarea2', 
        descripcion:'Informacion tarea2' 
    }, 
    { 
        _id:3, 
        name:'Tarea3', 
        descripcion:'Informacion tarea3' 
    } 
]) 
}

function verifyToken(req, res, next){
    console.log(req.headers.authorization);
    if(!req.headers.authorization){
        return res.status(401).send('No tiene autorización paara continuar')
    }
    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('No existe token')
    }
    const payload = jwt.verify(token, 'secretkey');
    console.log(payload);
    req.userId = payload._id
    next()
}

module.exports = usersController;
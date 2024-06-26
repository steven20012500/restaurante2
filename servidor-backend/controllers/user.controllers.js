const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { fchmodSync } = require('fs');
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
  try {
    const user = await User.findOne({ email });
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

function verifyToken2 (req, res, next)  {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send('No authorization header provided');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).send('No token provided');
    }
    try {
      const payload = jwt.verify(token, 'secretkey');
      req.userId = payload._id;
      next();
    } catch (error) {
      res.status(401).send('Invalid token');
    }
  }

//inicio de sesion Con token
function generateToken(user) {
    return jwt.sign({ _id: user.id, email: user.email }, 'secretkey', { expiresIn: '1h' });
}

// moddleware to verify token





module.exports = usersController;
//module.exports = verifyToken2;
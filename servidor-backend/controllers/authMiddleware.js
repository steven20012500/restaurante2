// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Asegúrate de que la ruta sea correcta

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret'); // Reemplaza 'your_jwt_secret' con tu secreto JWT
        req.userId = decoded.id;

        // Opcional: Verifica si el usuario existe
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        next();
    } catch (error) {
        console.error("Middleware error:", error);
        res.status(401).json({ message: "Token no es válido" });
    }
};

const authMiddleware2 = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('Authorization Header:', authHeader); // Log para verificar el encabezado de autorización

    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };
  const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Acceso no autorizado' });
    }
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.error('Error al verificar el token:', err);
        return res.status(403).json({ message: 'Acceso prohibido' });
      }
      req.user = user;  // Guardar el usuario en el objeto de solicitud
      next();
    });
  };

//module.exports = authMiddleware;
module.exports = authMiddleware2;
module.exports = verifyToken;
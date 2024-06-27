const jwt = require('jsonwebtoken');

  function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send('No authorization header provided');
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send('No token provided');
    }

    try {
      const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.userId = payload._id; // Suponiendo que el payload tiene un campo _id  // Guardar el usuario en el objeto de solicitud
      next();
    } catch (error) {
        return res.status(401).send('Invalid token');
    }
}
module.exports = verifyToken;
const {Router} = require('express');
const router = Router();
const platos = require('../controllers/platos.controllers');
const user = require('../controllers/user.controllers');
const order = require('../controllers/order.controllers');
const authMiddleware = require('../controllers/authMiddleware');
const authMiddleware2 = require('../controllers/authMiddleware');
const verifyToken = require('../controllers/authMiddleware');

router.get('/verPlatos', platos.getPlatos);
router.post('/ingresoPlatos', platos.addPlato);
router.post('/registro',user.addUser);
router.post('/ingreso',user.loginUser);
router.get('/tareas', user.getTasks);
router.post('/orden',verifyToken, order.createOrder);

//router.get('/tareas-privadas', user.getTasksPrivadas);
module.exports = router;
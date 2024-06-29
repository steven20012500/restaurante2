const {Router} = require('express');
const router = Router();
const platos = require('../controllers/platos.controllers');
const user = require('../controllers/user.controllers');
const order = require('../controllers/order.controllers');
const mesero = require('../controllers/meseros.controllers');
const verifyToken = require('../controllers/authMiddleware');

router.get('/verPlatos', platos.getPlatos);
router.post('/ingresoPlatos', platos.addPlato);
router.post('/registro',user.addUser);
router.post('/ingreso',user.loginUser);
router.get('/tareas', user.getTasks);
router.post('/orden',verifyToken, order.createOrder);
router.post('/ingresoMesero', mesero.addMesero);
router.get('/verMeseros',mesero.getMeseros);
router.post('/calificarMesero',mesero.calificarMesero);


//router.get('/tareas-privadas', user.getTasksPrivadas);
module.exports = router;
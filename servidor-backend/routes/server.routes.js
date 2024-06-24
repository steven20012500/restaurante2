const {Router} = require('express');
const router = Router();
const platos = require('../controllers/platos.controllers');
const user = require('../controllers/user.controllers');

router.get('/', platos.getPlatos);
router.post('/ingresoPlatos', platos.addPlato);
router.post('/registro',user.addUser);
router.post('/ingreso',user.loginUser);
router.get('/tareas', user.getTasks);
//router.get('/tareas-privadas', user.getTasksPrivadas);
module.exports = router;
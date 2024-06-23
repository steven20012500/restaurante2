const {Router} = require('express');
const router = Router();
const
platos = require('../controllers/platos.controllers');
router.get('/', platos.getPlatos);
router.post('/ingresoPlatos', platos.addPlato);
module.exports= router;
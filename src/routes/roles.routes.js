const { Router } = require('express');
const { getRoles, getRol, postRol, putRol, DeleteRol } = require('../controllers/roles.controllers');


const router = Router();

router.get('/', getRoles);
router.get('/:id_rol', getRol);
router.post('/', postRol);
router.put('/:id_rol', putRol);
router.delete('/:id_rol', DeleteRol);

module.exports = router;
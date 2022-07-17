const { Router } = require('express');
const { getUsuarios, getUsuario, postUsuario, putUsuario, banUsuario } = require('../controllers/usuarios.controllers');

const router = Router();

router.get('/', getUsuarios);
router.get('/:id_usuario', getUsuario);
router.post('/', postUsuario);
router.put('/:id_usuario', putUsuario);
router.delete('/:id_usuario', banUsuario);

module.exports = router;
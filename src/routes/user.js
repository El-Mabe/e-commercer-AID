const { Router } = require('express');
const { check } = require('express-validator');


const { validateInfo } = require('../middlewares/validate-info');
// const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { getUsers,
        createUser,
        deleateUser,
        getUserById,
        updateUser } = require('../controllers/user.controller');

const router = Router();

router.get('/:id', getUserById );
router.get('/', getUsers );

router.put('/:id',
// [
//     check('id', 'No es un ID válido').isMongoId(),
//     check('id').custom( existeUsuarioPorId ),
//     check('rol').custom( esRoleValido ), 
//     validateInfo
// ],
updateUser );

router.post('/',
[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('email', 'El correo no es válido').isEmail(),
    validateInfo
], 
createUser );

router.delete('/:id',
[
    check('id', 'No es un ID válido').not().isEmpty(),
    validateInfo
],deleateUser );

router.patch('/:id', updateUser );





module.exports = router;
import express from 'express'
import { check } from 'express-validator'
import { validateFields } from '../middlewares/validate-fields.js'
import { userGet, userPost, usersDelete, usersGet, usersPut } from '../controllers/user.controller.js'
import { existUserID, roleValidation } from '../helpers/db-validators.js'
import { validateJWT } from '../middlewares/validate-JWT.js'

const router = express()

router.get('/', [], usersGet);

router.get('/:id', [], userGet)

router.post('/register', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('firstName', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    check('city', 'La ciudad es obligatoria'),
    check('service_type', 'El tipo de servicio es obligatorio'),
    check('type_of_payment', 'El tipo de pago es obligatorio'),
    check('phone', 'El teléfono es obligatorio'),
    check('address', 'La dirección es obligatoria'),
    validateFields
], userPost);

router.put('/:id', [
    validateJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existUserID),
    validateFields
], usersPut);

router.delete('/:id', [
    validateJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existUserID),
    validateFields
], usersDelete);


export default router
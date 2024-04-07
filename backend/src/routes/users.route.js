import express from 'express'
import { check } from 'express-validator'
import { validateFields } from '../middlewares/validate-fields.js'
import { userPost, usersGet } from '../controllers/user.controller.js'

const router = express()

router.get('/', [], usersGet)

router.post('/', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('firstName', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    check('city', 'La ciudad es obligatoria').not().isEmpty(),
    check('service_type', 'El tipo de servicio es obligatorio').not().isEmpty(),
    check('type_of_payment', 'El tipo de pago es obligatorio').not().isEmpty(),
    check('phone', 'El teléfono es obligatorio').not().isEmpty(),
    check('address', 'La dirección es obligatoria').not().isEmpty(),
    validateFields
], userPost)

export default router
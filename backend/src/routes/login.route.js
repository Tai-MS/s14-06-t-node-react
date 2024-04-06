import express, { Router } from 'express';
import {check}  from 'express-validator'
import { login } from '../controllers/login.js';
import { validateFields } from '../middlewares/validate-fields.js';

const router = express();

router.post('/', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('contraseña', 'La contraseña es obligatoria').not().isEmpty(),
    validateFields
], login) 

export default router